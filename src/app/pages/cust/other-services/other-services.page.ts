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
  selector: 'app-other-services',
  templateUrl: './other-services.page.html',
  styleUrls: ['./other-services.page.scss'],
})
export class OtherServicesPage implements OnInit {
  otherServices:any;
  serviceCat:any;
  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { }

  ngOnInit() {
  // this.getServiceCat();	 
  this.updateService();
  }

  updateService(){
    this.serviceCat = [
      {
        "name":"education",
        "list":[
          {"name":"Tutor","img":"assets/img/flaticon/other/1.png"},
          {"name":"Play School","img":"assets/img/flaticon/other/2.png"},
          {"name":"NEET Coaching Center","img":"assets/img/flaticon/other/3.png"},
          {"name":"IIT,JEE Center","img":"assets/img/flaticon/other/4.png"},
          {"name":"MBA Center","img":"assets/img/flaticon/other/5.png"},
          {"name":"IAS Coaching Center","img":"assets/img/flaticon/other/6.png"},
          {"name":"Private Education Center","img":"assets/img/flaticon/other/7.png"},
          {"name":"Arts & Craft","img":"assets/img/flaticon/other/8.png"},
          {"name":"Drawing Class","img":"assets/img/flaticon/other/9.png"}
        ]
      },
      {
        "name":"entertainment",
        "list":[
          {"name":"Kid's play zone","img":"assets/img/flaticon/other/10.png"},
          {"name":"exhibition","img":"assets/img/flaticon/other/11.png"},
          {"name":"dance class","img":"assets/img/flaticon/other/12.png"},
          {"name":"musiq class","img":"assets/img/flaticon/other/13.png"},
          {"name":"DJ & VJ","img":"assets/img/flaticon/other/14.png"},
          {"name":"Master of ceremony","img":"assets/img/flaticon/other/15.png"},
          {"name":"cinematography","img":"assets/img/flaticon/other/16.png"},
          {"name":"videography","img":"assets/img/flaticon/other/17.png"},
          {"name":"photography","img":"assets/img/flaticon/other/18.png"},
          {"name":"karoake","img":"assets/img/flaticon/other/19.png"},
          {"name":"instrumental","img":"assets/img/flaticon/other/20.png"}
        ]
      },
      {
        "name":"health & fitness",
        "list":[
          {"name":"child specialist","img":"assets/img/flaticon/other/21.png"},
          {"name":"adult specialist","img":"assets/img/flaticon/other/22.png"},
          {"name":"diagnostic center","img":"assets/img/flaticon/other/23.png"},
          {"name":"gym","img":"assets/img/flaticon/other/24.png"},
          {"name":"zumba","img":"assets/img/flaticon/other/25.png"},
          {"name":"yoga","img":"assets/img/flaticon/other/26.png"},
          {"name":"fitness center","img":"assets/img/flaticon/other/27.png"},
          {"name":"swimming","img":"assets/img/flaticon/other/28.png"},
          {"name":"sports","img":"assets/img/flaticon/other/29.png"}
        ]
      },
      {
        "name":"essential service",
        "list":[
          {"name":"cook","img":"assets/img/flaticon/other/30.png"},
          {"name":"festive cooking","img":"assets/img/flaticon/other/31.png"},
          {"name":"maid","img":"assets/img/flaticon/other/32.png"},
          {"name":"call driver","img":"assets/img/flaticon/other/33.png"},
          {"name":"security service","img":"assets/img/flaticon/other/34.png"},
          {"name":"kitchen cleaning service","img":"assets/img/flaticon/other/35.png"},
          {"name":"washroom cleaning service","img":"assets/img/flaticon/other/36.png"},
          {"name":"house deep cleaning","img":"assets/img/flaticon/other/37.png"},
          {"name":"festive cleaning","img":"assets/img/flaticon/other/38.png"},
          {"name":"vehicle cleaning","img":"assets/img/flaticon/other/39.png"},
          {"name":"gardening","img":"assets/img/flaticon/other/40.png"},
          {"name":"tours & travels","img":"assets/img/flaticon/other/41.png"},
        ]
      },
      {
        "name":"health & medicines",
        "list":[
          {"name":"doctor appointment","img":"assets/img/flaticon/other/42.png"},
          {"name":"medicine purchase","img":"assets/img/flaticon/other/43.png"},
          {"name":"medical shops","img":"assets/img/flaticon/other/44.png"},
          {"name":"medicines supply","img":"assets/img/flaticon/other/45.png"},
        ]
      },
      {
        "name":"occasional services",
        "list":[
          {"name":"carpentry","img":"assets/img/flaticon/other/46.png"},
          {"name":"painter","img":"assets/img/flaticon/other/47.png"},
          {"name":"prohid","img":"assets/img/flaticon/other/48.png"},
          {"name":"hotel booking","img":"assets/img/flaticon/other/49.png"},
          {"name":"home decoration","img":"assets/img/flaticon/other/50.png"},
          {"name":"catering service","img":"assets/img/flaticon/other/51.png"},
        ]
      },
      {
        "name":"grooming services",
        "list":[
          {"name":"mehandi","img":"assets/img/flaticon/other/52.png"},
          {"name":"tailoring","img":"assets/img/flaticon/other/53.png"},
          {"name":"beautician / salons","img":"assets/img/flaticon/other/54.png"},
          {"name":"spa","img":"assets/img/flaticon/other/55.png"},
          {"name":"tattoo","img":"assets/img/flaticon/other/56.png"},
          {"name":"bridal makeup","img":"assets/img/flaticon/other/57.png"},
        ]
      },
      {
        "name":"home appliances",
        "list":[
          {"name":"ac","img":"assets/img/flaticon/other/58.png"},
          {"name":"ro","img":"assets/img/flaticon/other/59.png"},
          {"name":"fridge","img":"assets/img/flaticon/other/60.png"},
          {"name":"mobile","img":"assets/img/flaticon/other/61.png"},
          {"name":"mixer","img":"assets/img/flaticon/other/62.png"},
          {"name":"washing machine","img":"assets/img/flaticon/other/63.png"},
          {"name":"oven","img":"assets/img/flaticon/other/64.png"},
          {"name":"blender","img":"assets/img/flaticon/other/65.png"},
          {"name":"chimneys","img":"assets/img/flaticon/other/66.png"},
          {"name":"television","img":"assets/img/flaticon/other/67.png"},
          {"name":"computer","img":"assets/img/flaticon/other/68.png"},
          {"name":"dth","img":"assets/img/flaticon/other/69.png"},
        ]
      },
    ]
  }

  getServiceCat(){
	this.authService.getServiceCategory("14").subscribe(result=>{
		console.log(result);
		this.otherServices = result['data'].list;
	  });
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
