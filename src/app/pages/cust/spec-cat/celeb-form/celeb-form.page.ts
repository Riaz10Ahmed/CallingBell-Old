import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-celeb-form',
  templateUrl: './celeb-form.page.html',
  styleUrls: ['./celeb-form.page.scss'],
})
export class CelebFormPage implements OnInit {
  card:any;
  public onCelebForm: FormGroup;

  constructor(public navCtrl: NavController,
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder) {
   }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.card = this.router.getCurrentNavigation().extras.state.package;
        console.log(this.card);
      }
   });
  
   this.onCelebForm = this.formBuilder.group({
    'senderName': [null, Validators.required],
    'recipientNumber': [null, Validators.required],
    'recipientEmail': [null, Validators.required],
    'message': [null, Validators.required],
    });
  }

  celebForm(){
    console.log(this.onCelebForm.value,this.card);
  }

  back(){
    this.navCtrl.navigateBack('celeb-item');
  }

}
