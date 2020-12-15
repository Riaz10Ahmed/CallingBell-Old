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
  selector: 'app-family-card',
  templateUrl: './family-card.page.html',
  styleUrls: ['./family-card.page.scss'],
})
export class FamilyCardPage implements OnInit {
  public familycard=[
    {id:25,name:"Personal Details",image_url:"assets/img/flaticon/familycard/user.png"},
    {id:25,name:"Educational Details",image_url:"assets/img/flaticon/familycard/book.png"},
    {id:25,name:"professional details",image_url:"assets/img/flaticon/familycard/suitcase.png"},
    {id:25,name:"medical details",image_url:"assets/img/flaticon/familycard/medicine.png"},
    {id:25,name:"property details",image_url:"assets/img/flaticon/familycard/house.png"},
    {id:25,name:"renewals & remainders",image_url:"assets/img/flaticon/familycard/bell.png"},
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
