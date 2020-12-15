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
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage implements OnInit {
  public insurance=[
    {id:25,name:"life insurance",image_url:"assets/img/flaticon/insurance/life-insurance.png"},
    {id:25,name:"health insurance",image_url:"assets/img/flaticon/insurance/health-insurance.png"},
    {id:25,name:"product insurance",image_url:"assets/img/flaticon/insurance/product-insurance.png"},
    {id:25,name:"property insurance",image_url:"assets/img/flaticon/insurance/insurance.png"},
    {id:25,name:"automobile insurance",image_url:"assets/img/flaticon/insurance/car-insurance.png"},
    {id:25,name:"insurance claims",image_url:"assets/img/flaticon/insurance/claim.png"},
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
