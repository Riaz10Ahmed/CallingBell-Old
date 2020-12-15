import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../services/cart.service';
import { CartService } from '../../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  // selectedItems = [];
  // total = 0;
  // cart:any;

  cartProductList:any;
  cartServiceList:any;
  prodTotal:number;
  servTotal:number;
  constructor(
    private cartService: CartService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private alertCtrl:AlertController,
    public authService: AuthService, 
    public alertService: AlertService, ) { }

  ngOnInit() {
    this.authService.getCartList().subscribe(result=>{
      console.log(result);
      this.cartProductList = result['data'].product_list;
      this.cartServiceList = result['data'].service_list;
    })
  }

  // decreaseCartItem(i){
  //   this.cartService.decreaseProduct(product);
  //     i.count-=1
  //   }

  // increaseCartItem(i){
  //     i.count +=1
  // }

  removeProdCartItem(i){
    this.authService.removePCartItem(i).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    });
  }

  removeServCartItem(i){
    this.authService.removeSCartItem(i).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    });
  }


  getProdTotal(){
    // console.log(this.cartProductList.reduce((i,j: { product_detail: { mrp: number; }; count: number; }) => i+j.product_detail.mrp * j.count,0));
    if(this.cartProductList == null){
      return 0;
    }else{
      return this.cartProductList.reduce((i,j: { product_detail: { mrp: number; }; count: number; }) => i+j.product_detail.mrp * j.count,0);
    }
  }

  getServTotal(){
    // console.log(this.cartServiceList.reduce((i,j: { service_detail: { mrp: number; }; }) => i+j.service_detail.mrp * 1,0));
    if(this.cartServiceList == null){
      return 0;
    }else{
      return this.cartServiceList.reduce((i,j: { service_detail: { mrp: number; }; }) => i+j.service_detail.mrp * 1,0);
    }
  }

  close(){
    this.modalCtrl.dismiss();
  }

  async checkout() {
    let total = (this.getProdTotal() + this.getServTotal()) 
    console.log(total);
    
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      subHeader: 'Payment mode - Cash On Delivery',
      message: 'Total : '+ total,
      cssClass:'cartStyle',
      buttons: [
        {
          text:'Back to Cart',
          cssClass: 'darkblue',
          handler:async ()=>{
            let modal = await this.modalCtrl.create({
              component: CartPage,
              cssClass:'cart-modal'
            });
            modal.present();
          }
        },
        {
          text:'Confirm Order',
          cssClass: 'darkblue',
          handler:()=>{
            this.authService.placeOrder().subscribe(
              result =>{
                console.log(result);
              });
          }
        },
      ]
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
  
  goToGrocery(){
    this.navCtrl.navigateForward('groceries');
    this.modalCtrl.dismiss();
  }

  goToService(){
    this.navCtrl.navigateForward('trending');
    this.modalCtrl.dismiss();
  }

  async updateCart(prod){
    const alert = await this.alertCtrl.create({
      header: 'Select the Quantity',
      mode:'ios',
      inputs: [
        {
          name: '1',
          type: 'radio',
          label: '1',
          value: '1',
          checked: true
        },

        {
          name: '2',
          type: 'radio',
          label: '2',
          value: '2'
        },

        {
          name: '3',
          type: 'radio',
          label: '3',
          value: '3'
        },

        {
          name: '4',
          type: 'radio',
          label: '4',
          value: '4'
        },

        {
          name: '5',
          type: 'radio',
          label: '5',
          value: '5'
        },

        {
          name: '6',
          type: 'radio',
          label: '6',
          value: '6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'dark',
          handler: () => {
            this.ngOnInit();
          }
        }, {
          text: 'Update Cart',
          handler: (data) => {
            console.log(data,prod.id);
            let qty:Object={
              "qty":data
            }
            this.authService.addToCart(qty,prod).subscribe(
              result=>{
                console.log(result)
                this.ngOnInit();
              }
            )
          }
        }
      ]
    });
    await alert.present();
  }
}
