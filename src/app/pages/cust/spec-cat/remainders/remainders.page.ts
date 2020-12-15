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
  selector: 'app-remainders',
  templateUrl: './remainders.page.html',
  styleUrls: ['./remainders.page.scss'],
})
export class RemaindersPage implements OnInit {
  public remainders=[
    {id:25,name:"Insurance renewals",image_url:"assets/img/flaticon/remainders/life-insurance.png"},
    {id:25,name:"Monthly Bill remainders",image_url:"assets/img/flaticon/remainders/invoice.png"},
    {id:25,name:"passport & license renewals",image_url:"assets/img/flaticon/remainders/passport.png"},
    {id:25,name:"Birthday remainders",image_url:"assets/img/flaticon/remainders/gift.png"},
    {id:25,name:"wedding day remainders",image_url:"assets/img/flaticon/remainders/love-letter.png"},
    {id:25,name:"custom remainders",image_url:"assets/img/flaticon/remainders/bell.png"},
  ]
  constructor(public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
