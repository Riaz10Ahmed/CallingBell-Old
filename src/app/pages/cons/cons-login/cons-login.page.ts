import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cons-login',
  templateUrl: './cons-login.page.html',
  styleUrls: ['./cons-login.page.scss'],
})
export class ConsLoginPage implements OnInit {

  public onConsLoginForm: FormGroup;
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
  	this.onConsLoginForm = this.formBuilder.group({
      'phone': [null, Validators.compose([
        Validators.required,
      ])],
      'password': [null, Validators.compose([
        Validators.required,
      ])]
    });
  }

  login() {
    this.navCtrl.navigateForward('cons-home');
  }

  back(){
    this.navCtrl.navigateBack('cons-start');
  }

}
