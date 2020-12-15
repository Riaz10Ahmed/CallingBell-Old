import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
  NavParams
} from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-supportcall',
  templateUrl: './supportcall.component.html',
  styleUrls: ['./supportcall.component.scss'],
})
export class SupportcallComponent implements OnInit {
  @Input() service:any;
  public onSupportForm :FormGroup;
  reqDate: any;
 
  constructor(private formBuilder: FormBuilder,
              public loadingCtrl: LoadingController, 
              private popoverctrl:PopoverController,
              public alertService: AlertService,
              public authService: AuthService) { }

  ngOnInit() {
    this.onSupportForm = this.formBuilder.group({
        // 'callMeNow':[null],
        // 'callMeTodayAt':[null],
        'reqDate':[null,Validators.required],
        'reqTime':[null,Validators.required],
        'notes':[null]
      });
     
  }

  async sendSupport() {
    console.log(this.service);
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    
    loader.present();
   loader.onWillDismiss().then(async l => {
    var dateFormat = this.onSupportForm.value.reqDate.split('T')[0];
    var splitOne = this.onSupportForm.value.reqTime.split('.')[0];
    var timeFormat = splitOne.split('T')[1];
    var job_date = dateFormat.concat(' '+timeFormat.toString());
    console.log(this.service.id, this.onSupportForm.value.notes, job_date);
    this.authService.serviceRequest(this.service.id, this.onSupportForm.value.notes, job_date).subscribe(
      result=>{
        console.log(result);
      }
    )
  });
   await loader.present();
   await this.popoverctrl.dismiss();
   this.alertService.presentToast("We have received your request! Our Customer Relationship Executive will reach you!");
  }

}
