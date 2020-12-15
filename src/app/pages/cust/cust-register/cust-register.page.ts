import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cust-register',
  templateUrl: './cust-register.page.html',
  styleUrls: ['./cust-register.page.scss'],
})
export class CustRegisterPage implements OnInit {
	  public onRegisterForm: FormGroup;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router:Router) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  	this.onRegisterForm = this.formBuilder.group({
      'first_name': [null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z ]{3,}')
      ])],
      'last_name':[null,Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-z]{2,}')
      ])],
      'phone': [null, Validators.compose([
        Validators.required, 
        Validators.maxLength(15), 
      ])],
      'email': [null, Validators.compose([
        Validators.pattern('^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')
        ])],
      
    });
  }

    async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    this.authService.register(this.onRegisterForm.value).subscribe(
     
      data => {
        console.log(data);
        if (data['status'] === true) {
          console.log(this.onRegisterForm.value.phone);
          this.authService.newRequest(this.onRegisterForm.value.phone).subscribe(
            result=>{
              console.log(result);
              if(result['status'] === true){
                this.alertService.presentToast(result['message']);
              let navigationExtras: NavigationExtras={
                state:{
                  number:this.onRegisterForm.value
                }
              }
              this.router.navigate(['otp-form'],navigationExtras);
            }else{
              this.alertService.presentToast(result['message']);
            }
              }
          )
        } else {
          this.alertService.presentToast(data['message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('cust-login');
  }

}
