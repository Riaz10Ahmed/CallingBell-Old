import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NavController,
   NavParams,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.page.html',
  styleUrls: ['./edit-ticket.page.scss'],
})
export class EditTicketPage implements OnInit {
	status:any;
	ticket:any;

	public onUpdateForm: FormGroup;
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private router: Router) { }

 ngOnInit() {
  	this.editTicket();
  	  this.onUpdateForm = this.formBuilder.group({
      'status': [null, Validators.compose([
      ])],
      'solution': [null, Validators.compose([
      ])]
    });
  }

   editTicket(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.ticket = this.router.getCurrentNavigation().extras.state.t;
    		var body='';
       
          this.authService.editTicket().subscribe(result =>{
               console.log(result);
               this.status= result['status'];
               console.log(this.status);
          });
        }

    });
  }


  updateTicket(id,number){
    console.log(this.onUpdateForm.value);
    console.log(id,number);
    this.authService.updateTicket(id,number,this.onUpdateForm.value).subscribe(
      data => {
        console.log(data);
        if (data['response']) {
          this.alertService.presentToast(data['message']);
          this.navCtrl.navigateRoot('tech-home');
        } else {
          this.alertService.presentToast(data['message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

 

  logout() {
    this.authService.techlogout();
    this.navCtrl.navigateRoot('/');
  }

}
