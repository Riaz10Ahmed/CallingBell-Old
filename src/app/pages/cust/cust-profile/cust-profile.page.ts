import { Component, OnInit } from '@angular/core';
import { NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-profile',
  templateUrl: './cust-profile.page.html',
  styleUrls: ['./cust-profile.page.scss'],
})
export class CustProfilePage implements OnInit {
 user:any;
 image:any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService, 
    public alertService: AlertService, 
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder, 
    private router: Router) { }

  ngOnInit() {
  	this.getUser();
  }

    getUser() {
    this.authService.getUserProfile().subscribe(data =>{
      console.log(data);
      this.user = data.message;
      this.image = data.image[0].image;
    });
  }

  editProfile(){
  	this.navCtrl.navigateForward('edit-profile');
  }

   async changePass() {
    const changePass = await this.alertCtrl.create({
      header: 'Enter Your Old & New Password',
      // message: 'Enter your Support Query below',
      inputs: [
        {
          name: 'oldpass',
          placeholder: 'Old Password',
          type: 'password'
        },
        {
          name: 'newpass',
          placeholder: 'New Password',
          type:'password'
        },
        {
          name: 'confirmnewpass',
          placeholder : 'Confirm New Password',
          type:'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'submit',
          handler: async (data) => {
            if(data.newpass == data.confirmnewpass){
            const loader = await this.loadingCtrl.create({
              duration: 1000
            });

            loader.present();

            loader.onWillDismiss().then(async l => {
              console.log(data);
              this.authService.changePass(data).subscribe(result => {
                if (result['response']) {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                } else {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                }
              });
            });
          }else{
            this.alertService.presentToast('New password does not match!');
          }
          }
        }
      ]
    });
    changePass.present();
  }
}
