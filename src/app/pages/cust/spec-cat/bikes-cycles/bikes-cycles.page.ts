import { Component, OnInit, ViewChild } from '@angular/core';
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

import { Router, NavigationExtras } from '@angular/router';

import{ IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-bikes-cycles',
  templateUrl: './bikes-cycles.page.html',
  styleUrls: ['./bikes-cycles.page.scss'],
})
export class BikesCyclesPage implements OnInit {
	sliderOne: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    public router: Router) 
  { 
  	this.sliderOne =
      {
        isBeginningSlide: true,
        isEndSlide: false,
        slidesItems: [
          {
            id: 1,
          },
          {
            id: 2
          },
          {
            id: 3
          },
          {
            id: 4
          }
        ]
      };
  }

  ngOnInit() {
  }

  ebike(){
    this.navCtrl.navigateForward('ebike');
  }
}
