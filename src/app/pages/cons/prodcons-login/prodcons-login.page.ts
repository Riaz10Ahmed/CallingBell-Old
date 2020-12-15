import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-prodcons-login',
  templateUrl: './prodcons-login.page.html',
  styleUrls: ['./prodcons-login.page.scss'],
})
export class ProdconsLoginPage implements OnInit {
  public onProdConsLoginForm: FormGroup;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: NativeStorage,
    private alertService: AlertService) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  	this.onProdConsLoginForm = this.formBuilder.group({
      'phone': [null, Validators.compose([
        Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}'),
      ])],
      'password': [null, Validators.compose([
        Validators.required,
      ])]
    });
  }

  login() {
    console.log(this.onProdConsLoginForm.value);
    this.authService.consLogin(this.onProdConsLoginForm.value).subscribe(
      data => {
        console.log(data);
        if (data['response']) {
          this.authService.storeUserData(data['token'], data['user']);
          var count = data['count'];
          console.log(count);
          let navigationExtras: NavigationExtras={
          state:{
            count:count
            }
          }
          this.alertService.presentToast('Logged in successfully');
          this.navCtrl.navigateRoot('cons-home',navigationExtras);
        } else {
          this.alertService.presentToast(data['message']);
          return false;
        }
      }
    );
  }

  back(){
    this.navCtrl.navigateBack('cons-start');
  }

}
