import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-tech-login',
  templateUrl: './tech-login.page.html',
  styleUrls: ['./tech-login.page.scss'],
})
export class TechLoginPage implements OnInit {
  public onTechLoginForm: FormGroup;
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
   this.onTechLoginForm = this.formBuilder.group({
      'username': [null, Validators.compose([
        Validators.required,
      ])],
      'password': [null, Validators.compose([
        Validators.required, 
      ])]
    });
  }

   login() {
    this.navCtrl.navigateForward('tech-home');
  }

  back(){
    this.navCtrl.navigateRoot('/');
  }
}
