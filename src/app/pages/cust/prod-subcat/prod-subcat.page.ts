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
import { CartPage } from '../cart/cart.page';


@Component({
  selector: 'app-prod-subcat',
  templateUrl: './prod-subcat.page.html',
  styleUrls: ['./prod-subcat.page.scss'],
})
export class ProdSubcatPage implements OnInit {
  defImg = "http://kmvn.in/uploads/imagenot.png";
	pro:any;
  subCategory:Array<any>;
  brand:any;
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router,
              public modalCtrl: ModalController) { }

  ngOnInit() {
    this.getSubCategory();
  }

    getSubCategory(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.pro = this.router.getCurrentNavigation().extras.state.category_id;
          this.authService.getProds(this.pro).subscribe(result =>{
            console.log(result);
               this.subCategory = result['data'].list;
               console.log(this.subCategory);
               this.brand = result['data'].list;
          });

        }
    }); 
  }

  productList(subCat){
    let navigationExtras: NavigationExtras={
      state:{
        product:subCat
      }
    }
    this.router.navigate(['prod-list'],navigationExtras);
  }

  addToCart(sclist){
    this.alertService.cartNote('1 item added to cart');
    let qty={
      "qty":"1"
    }
    this.authService.addToCart(qty,sclist).subscribe(result =>{
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
    this.navCtrl.navigateBack('trending-issues');
  }
}
