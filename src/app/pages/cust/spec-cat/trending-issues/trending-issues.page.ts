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
  selector: 'app-trending-issues',
  templateUrl: './trending-issues.page.html',
  styleUrls: ['./trending-issues.page.scss'],
})
export class TrendingIssuesPage implements OnInit {
  service:any;
  serviceId:any;
  serviceSC:any;
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
    private route:ActivatedRoute,) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.serviceId = this.router.getCurrentNavigation().extras.state.service.id;
        this.service = this.router.getCurrentNavigation().extras.state.service;
         this.authService.getServiceCategory(this.serviceId).subscribe(result => {
           console.log(result);
           this.serviceSC = result['data'].list;
           console.log(this.serviceSC);
          });
      }
  });
  }

  goToProducts(){
    if(this.serviceId == 86){
      let navigationExtras: NavigationExtras={
        state:{
          category_id:2
        }
      }
      this.router.navigate(['prod-subcat'],navigationExtras);
    }
    else if(this.serviceId == 87){
      let navigationExtras: NavigationExtras={
        state:{
          category_id:3
        }
      }
      this.router.navigate(['prod-subcat'],navigationExtras);
    }
  }

  allService(){
    let navigationExtras: NavigationExtras={
      state:{
        service:this.service
      }
    }
    this.router.navigate(['quick-book'],navigationExtras);
  }

  goToIssueList(service){
    let navigationExtras: NavigationExtras={
      state:{
        service:service
      }
    }
    this.router.navigate(['issue-list'],navigationExtras);
    console.log(service);
  }
 
  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }


  back(){
    this.navCtrl.navigateBack('trending');
  }
}
