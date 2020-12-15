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
import { CartPage } from '../../cart/cart.page';
@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
})
export class GroceriesPage implements OnInit {

  groceryCat:any;

  constructor(public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,
    public modalCtrl:ModalController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private router: Router) { }

  ngOnInit() {
    this.getGroceryCat();
  }

  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }

  getGroceryCat(){
    this.authService.getProds("17").subscribe(result => {
      console.log(result);
      this.groceryCat = result['data'].list;
      console.log(this.groceryCat);
    });
  }

  async getGrocerylt(catId){
    let navigationExtras: NavigationExtras={
      state:{
        catId:catId
      }
    }
    this.router.navigate(['grocery-level2'],navigationExtras);
    console.log(catId);
  }

  goToOrganics(){
    let catId={
      "id":178,
      "name":"organics"
    }
    let navigationExtras: NavigationExtras={
      state:{
        catId:catId
      }
    }
    this.router.navigate(['grocery-level2'],navigationExtras);
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }

  quickbuy(){
    this.navCtrl.navigateForward('quick-buy');
  }

}
