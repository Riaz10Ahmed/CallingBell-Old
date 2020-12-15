import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  public onResetForm: FormGroup;
  constructor(
  	  public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService) { }

ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onResetForm = this.formBuilder.group({
      'phone': [null, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ])],
      'password': [null, Validators.compose([
        Validators.required,
      ])],
      'confirmpassword': [null, Validators.compose([
        Validators.required,
      ])],
      'code': [null, Validators.compose([
        Validators.required,
        Validators.pattern('[0-9]{6}')
      ])],
    });
  }

  async  resetPassword() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    this.authService.resetPassword(this.onResetForm.value).subscribe(response => {
      if (response['response']) {
        this.alertService.presentToast(response['message']);
        this.navCtrl.navigateRoot('cust-login');
      } else {
        this.alertService.presentToast(response['message']);
      }
    });
    console.log(this.onResetForm.value);
  }

  goToLogin() {
    this.navCtrl.navigateRoot('cust-login');
  }
}
