import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController} from '@ionic/angular';

import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import { CartPage } from '../../cart/cart.page';
@Component({
  selector: 'app-quick-book',
  templateUrl: './quick-book.page.html',
  styleUrls: ['./quick-book.page.scss'],
})
export class QuickBookPage implements OnInit {
  subCategory:any;
  issue:any;
  issueList:any;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    public router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.allService();
  }

  allService(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.issue = this.router.getCurrentNavigation().extras.state.service.id;
        this.subCategory = this.router.getCurrentNavigation().extras.state.service.name;

         this.authService.getServiceCategory(this.issue).subscribe(result => {
           console.log(result);
           this.issueList = result['data'].list;
           console.log(this.issueList);
          });
      }
  }); 
  }

  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }

  addToCart(service:any) {
    this.alertService.cartNote('Added to cart');
    // this.cartService.addProduct(product);
    console.log(service);
    this.authService.addToServiceCart(service).subscribe(result =>{
      console.log(result);
      });
  }

  back(){
    this.navCtrl.navigateBack('trending-issues');
  }
} 
