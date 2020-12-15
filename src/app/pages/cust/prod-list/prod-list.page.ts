import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import {
  NavController,
   NavParams,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { CartService } from '../../../services/cart.service';
import { CartPage } from '../cart/cart.page';
@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.page.html',
  styleUrls: ['./prod-list.page.scss'],
})
export class ProdListPage implements OnInit {
  product:any;
  list:any;
  name:any;
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public modalCtrl:ModalController,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }


   getProducts(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.product = this.router.getCurrentNavigation().extras.state.product.id;
        this.name = this.router.getCurrentNavigation().extras.state.product.name;
        this.authService.getProds(this.product).subscribe(result =>{
          console.log(result);
          this.list = result['data'].list;
        });
      }
  });    
  }

  addToCart(product) {
    this.alertService.cartNote('1 item added to cart');
    let qty={
      "qty":"1"
    }
    this.authService.addToCart(qty,product).subscribe(result =>{
      console.log(result);
      });
    }

    async opencart(){
      let modal = await this.modalCtrl.create({
        component: CartPage,
        cssClass:'cart-modal'
      });
      modal.present();
    }

getProductDesc(cat){
    let navigationExtras : NavigationExtras={
      state:{
        prod:cat
      }
    }
    this.router.navigate(['prod-desc'],navigationExtras);
    console.log(cat);
  }
  
  back(){
    this.navCtrl.navigateBack('prod-subcat');
  }
}
