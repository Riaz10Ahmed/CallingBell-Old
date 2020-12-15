import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
  NavParams
} from '@ionic/angular';
import { CartPage } from '../../../pages/cust/cart/cart.page';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  public notification=[
    {id:1,name:"Items available in cart for checkout",date:"2 days ago",icon:"cart.png",category:"cart"},
    {id:2,name:"Add Asset - Update your personal details ",date:"3 days ago",icon:"refresh.png",category:"update"},
    {id:3,name:"Health & Medicine - Vaccination pending",date:"5 days ago",icon:"remainder.png",category:"remainder"},
    {id:4,name:"Add Asset - Update your product details",date:"5 days ago",icon:"refresh.png",category:"update"},
    {id:5,name:"Birthday - Riaz (20th April)",date:"7 days ago",icon:"remainder.png",category:"remainder"},
    {id:6,name:"Service - FLAT 50% OFF on 2nd AC Service",date:"7 days ago",icon:"sale.png",category:"offer"},
    {id:7,name:"Insurance - Buy Health Insurance",date:"A week ago",icon:"remainder.png",category:"remainder"},
    {id:8,name:"Service - FLAT 10% OFF on Battery Service",date:"A week ago",icon:"sale.png",category:"offer"},
  ]
  constructor(public modalCtrl:ModalController,
              public navCtrl:NavController) { }

  ngOnInit() {
  }

  goTo(notify: { id: number; }){
    if(notify.id == 1){
      this.opencart();
    }else if(notify.id == 2){
      this.navCtrl.navigateForward('add-asset');
    }else if(notify.id == 3){
      this.navCtrl.navigateForward('medical');
    }else if(notify.id == 4){
      this.navCtrl.navigateForward('add-asset');
    }else if(notify.id == 5){
      this.navCtrl.navigateForward('celeb-package');
    }else if(notify.id == 6){
      this.navCtrl.navigateForward('trending');
    }else if(notify.id == 7){
      this.navCtrl.navigateForward('insurance');
    }else if(notify.id == 8){
      this.navCtrl.navigateForward('trending');
    }
  }

  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }    

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
