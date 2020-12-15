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

@Component({
  selector: 'app-prod-latest-arrivals',
  templateUrl: './prod-latest-arrivals.page.html',
  styleUrls: ['./prod-latest-arrivals.page.scss'],
})
export class ProdLatestArrivalsPage implements OnInit {
	prodcat:any;
	subcat:any;
	prodlist:any;
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router,
              private cartService: CartService) { }

  ngOnInit() {
  	 this.getProducts();
  }

     getProducts(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.prodcat = this.router.getCurrentNavigation().extras.state.prodcat;
          this.subcat = this.router.getCurrentNavigation().extras.state.subCat.subcategory;
          console.log(this.prodcat);
          console.log(this.subcat);
          this.authService.getLatestArrival(this.prodcat,this.subcat).subscribe(result =>{
                console.log(result);
                this.prodlist = result['message'];
                console.log(this.prodlist);
                // this.prod = result['message']
           });
        }
    });
    
  }

    getProductDesc(prod){
    let navigationExtras : NavigationExtras={
      state:{
        prod:prod
      }
    }
    this.router.navigate(['prod-desc'],navigationExtras);
    console.log(prod);
  }

 opencart(){
    this.navCtrl.navigateForward('cart');
  }

  back(){
    this.navCtrl.navigateBack('prod-subcat');
  }
}
