import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../../services/cart.service';
import { ImageModalPage } from '../../image-modal/image-modal.page';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../../cart/cart.page';
@Component({
  selector: 'app-grocery-desc',
  templateUrl: './grocery-desc.page.html',
  styleUrls: ['./grocery-desc.page.scss'],
})
export class GroceryDescPage implements OnInit {
  desc:any;
  productDesc:any;
  slidesOptions1 = {
    slidesPerView:1.5
  };
  cart = [];
  cardItemCount: BehaviorSubject<number>;
  
  public onQtyForm:FormGroup;

  @ViewChild('cart',{ static:false, read: ElementRef})fab:ElementRef;

  constructor( private route:ActivatedRoute,
    public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private router: Router,
    private cartService: CartService,
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onQtyForm = this.formBuilder.group({
      'qty':['', Validators.required]
    });
    this.getGroceryDesc();
    this.cart = this.cartService.getCart();
    this.cardItemCount = this.cartService.getCartItemCount();
  }

  getGroceryDesc(){
    this.route.queryParams.subscribe(params => {
       if (this.router.getCurrentNavigation().extras.state) {
         this.desc = this.router.getCurrentNavigation().extras.state.groceryDesc;
           this.authService.getProdsDesc(this.desc).subscribe(result => {
            this.productDesc = result['data'];
             console.log(this.productDesc);
            });
       }
   });
  }

  addToCart(product) {
    this.alertService.cartNote('1 item added to cart');
    // this.cartService.addProduct(product);
    console.log(product);
    console.log(this.onQtyForm.value);
    
    this.authService.addToCart(this.onQtyForm.value,product).subscribe(result =>{
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

 
  openPreview(img){
    this.modalCtrl.create({
      component:ImageModalPage,
      componentProps:{
        img:img
      }
    }).then(modal => modal.present());
  }

  back(){
    this.navCtrl.navigateBack('grocery-level2');
  }
}
