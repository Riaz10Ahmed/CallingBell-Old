import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController} from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import {Router,ActivatedRoute } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-cons-home',
  templateUrl: './cons-home.page.html',
  styleUrls: ['./cons-home.page.scss'],
})
export class ConsHomePage implements OnInit {
  count:any;
  constructor( public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    private router: Router,
    private route:ActivatedRoute,
    public imagePicker:ImagePicker) { }

 
  ngOnInit() {
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.count = this.router.getCurrentNavigation().extras.state.count
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  consProfile(){
    this.navCtrl.navigateForward('cons-profile');
  }

  logout(){
    this.authService.logout();
    this.navCtrl.navigateRoot('/');
  }
}
