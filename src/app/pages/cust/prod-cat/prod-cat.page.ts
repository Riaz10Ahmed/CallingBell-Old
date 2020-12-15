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

import { SupportComponent } from '../../../components/support/support.component';
@Component({
  selector: 'app-prod-cat',
  templateUrl: './prod-cat.page.html',
  styleUrls: ['./prod-cat.page.scss'],
})
export class ProdCatPage implements OnInit {
	 prodCat:any;
  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { }

  ngOnInit() {
  	  this.productCategory();
  }

  productCategory(){
    this.authService.getProducts().subscribe(data =>{
      console.log(data);
      this.prodCat = data.message;
    });
  }


  async productList(p){
    let navigationExtras: NavigationExtras={
      state:{
        p:p
      }
    }
    this.router.navigate(['prod-subcat'],navigationExtras);
    console.log(p);
  }

  async notifications(ev: any,p:any) {
    const popover = await this.popoverCtrl.create({
      component: SupportComponent,
      componentProps:{
        p:p
      },
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

 opencart(){
    this.navCtrl.navigateForward('cart');
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }

  otherService(){
    this.navCtrl.navigateForward('other-services');
  }
}
