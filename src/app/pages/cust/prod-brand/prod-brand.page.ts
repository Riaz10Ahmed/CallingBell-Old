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


@Component({
  selector: 'app-prod-brand',
  templateUrl: './prod-brand.page.html',
  styleUrls: ['./prod-brand.page.scss'],
})
export class ProdBrandPage implements OnInit {
 pro:any;
  subCategory:Array<any>;
  prod:any;

  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
  	// this.items = this.getProducts();
   // console.log(this.pro);
    this.getSubCategory();
  }

   getSubCategory(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.pro = this.router.getCurrentNavigation().extras.state.p.categoryName;
    
       
          this.authService.getProductCategory(this.pro).subscribe(result =>{
               console.log(result);
               this.subCategory = result['message'];
               console.log(this.subCategory);
               this.prod = result['message']
          });

        }
    });
     
  }

   productList(brand){
    let navigationExtras: NavigationExtras={
      state:{
        brand:brand,
      }
    }
    this.router.navigate(['prod-list'],navigationExtras);
    console.log(brand);
  }


async openSupport(brand) {
    const changeLocation = await this.alertCtrl.create({
      header: 'Welcome to Support',
      message: 'Enter your Query',
      inputs: [
        {
          name: 'info',
          placeholder: 'Enter your query',
          type: 'text'
        },
        {
          name: 'category',
          value: brand.productCategory,
          disabled:true

        },
        {
          name:'brand',
          value:brand.brand,
          disabled:true
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'submit',
          handler: async (data) => {
            const loader = await this.loadingCtrl.create({
              duration: 1000
            });

            loader.present();

            loader.onWillDismiss().then(async l => {
              console.log(data.info);
              // this.authService.sendCode(data.info).subscribe(result => {
              //   if (result['response']) {
              //     console.log(result);
              //     this.alertService.presentToast(result['msg']);
              //   } else {
              //     console.log(result);
              //     this.alertService.presentToast(result['msg']);
              //   }
              // });
              this.authService.postSupport(data).subscribe(result => {
                if (result['response']) {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                } else {
                  console.log(result);
                  this.alertService.presentToast(result['message']);
                }
              });
            });
          }
        }
      ]
    });
    changeLocation.present();
  }

   cart(){
    this.navCtrl.navigateForward('cart');
  }
}
