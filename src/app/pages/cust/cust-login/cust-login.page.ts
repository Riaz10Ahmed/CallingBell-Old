import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-cust-login',
  templateUrl: './cust-login.page.html',
  styleUrls: ['./cust-login.page.scss'],
})
export class CustLoginPage implements OnInit {

	public onLoginForm: FormGroup;

  constructor(  public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: NativeStorage,
    private alertService: AlertService,
    private router: Router,
    ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      'phone': [null, Validators.compose([
        Validators.required, Validators.maxLength(15),
      ])],
      // 'password': [null, Validators.compose([
      //   Validators.required,
      // ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter your registered mobile number.',
      inputs: [
        {
          name: 'phone',
          type: 'text',
          placeholder: 'Mobile Number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async (alertData) => {
        
            const loader = await this.loadingCtrl.create({
              duration: 1000
            });
            
            loader.present();
            loader.onWillDismiss().then(async l => {
              console.log(alertData.phone);
              this.authService.sendCode(alertData.phone).subscribe(result => {
                if (result['response']) {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                } else {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                }
              });
              // const toast = await this.toastCtrl.create({
              //   showCloseButton: true,
              //   message: 'Email was sended successfully.',
              //   duration: 3000,
              //   position: 'bottom'
              // });

              // toast.present();
            
          });

          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('cust-register');
  }

  resetPass() {
    this.navCtrl.navigateRoot('reset-password');
  }

  login() {
    // console.log(this.onLoginForm.value);
    this.authService.otpRequest(this.onLoginForm.value).subscribe(
      data => {
        console.log(data);
        if (data['status'] == true) {
          this.alertService.presentToast(data['message']);
          // this.authService.storeUserData(data['token'], data['user']);
          // this.storage.setItem('user',{
          //   token : data['token']
          // }).then(()=>{
          //   this.navCtrl.navigateRoot('cust-home');
          // })
          // this.navCtrl.navigateRoot('cust-home');
          let number = this.onLoginForm.value;
          let navigationExtras: NavigationExtras={
            state:{
              number:number
            }
          }
          this.router.navigate(['otp-form'],navigationExtras);
          console.log(number);
        } else {
          this.alertService.presentToast(data);
          return false;
        }
      }
    );
  }

  

  back(){
    this.navCtrl.navigateRoot('/');
  }

  async callSupport(){
    const alert = await this.alertCtrl.create({
      header: 'CALL FOR ASSISTANCE',
      message: 'Enter your mobile number.',
      inputs: [
        {
          name: 'phone',
          type: 'number',
          placeholder: 'Mobile Number'
        }
      ],
      buttons: [
       {
          text: 'Confirm',
          handler: async (alertData) => {
        
            const loader = await this.loadingCtrl.create({
              duration: 1000
            });
            
            loader.present();
            loader.onWillDismiss().then(async l => {
              console.log(alertData.phone);
             this.alertService.presentToast("Our Customer Relationship Executive will reach you!");
          });
          }
        }
      ]
    });
    await alert.present();
  }
  
}
