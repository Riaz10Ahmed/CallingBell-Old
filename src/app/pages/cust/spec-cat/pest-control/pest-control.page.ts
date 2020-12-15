import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-pest-control',
  templateUrl: './pest-control.page.html',
  styleUrls: ['./pest-control.page.scss'],
})
export class PestControlPage implements OnInit {

  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { 
  }

  ngOnInit() {

  }

  pestControl(){
    this.navCtrl.navigateForward('pest-control-second');
  }

}
