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
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {
  public documents=[
    {id:25,name:"personal document",image_url:"assets/img/flaticon/document/support.png"},
    {id:25,name:"professional document",image_url:"assets/img/flaticon/document/suitcase.png"},
    {id:25,name:"product document",image_url:"assets/img/flaticon/document/appliances.png"},
    {id:25,name:"property document",image_url:"assets/img/flaticon/document/house.png"},
    {id:25,name:"medical document",image_url:"assets/img/flaticon/document/certificate.png"},
    {id:25,name:"government document",image_url:"assets/img/flaticon/document/government.png"},
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
