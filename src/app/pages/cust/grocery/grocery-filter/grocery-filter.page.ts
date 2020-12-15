import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { ActivatedRoute } from '@angular/router';
import { CartPage } from '../../cart/cart.page';
@Component({
  selector: 'app-grocery-filter',
  templateUrl: './grocery-filter.page.html',
  styleUrls: ['./grocery-filter.page.scss'],
})
export class GroceryFilterPage implements OnInit {
  public onFilterForm: FormGroup;
  groceryList:any;
  groceryBrand: any;
  groceryQty: any;
  groceryPrice: any;
  brandArray:any[];
  qtyArray:any[];
  constructor(private route:ActivatedRoute,
    public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public modalCtrl:ModalController,
    private router: Router,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.getFilter();
    this.brandArray = [];
    this.qtyArray = [];
    this.onFilterForm = this.formBuilder.group({
      'brand': ['false'],
      'quantity':['false']
    });
  }

  selectBrand(brand) {
      let vchek=this.onFilterForm.value.brand;
      if(this.brandArray.indexOf(brand)==-1 && vchek==true)
      {
        this.brandArray.push(brand);
      } 
      if(vchek!=true)
      {
        let array_key=this.brandArray.indexOf(brand);
        if (array_key !== -1) {
          this.brandArray.splice(array_key, 1);
       }     
      }
  }

  selectQty(qty){
    let vchek=this.onFilterForm.value.quantity;
      if(this.qtyArray.indexOf(qty)==-1 && vchek==true)
      {
        this.qtyArray.push(qty);
      } 
      if(vchek!=true)
      {
        let array_key=this.qtyArray.indexOf(qty);
        if (array_key !== -1) {
          this.qtyArray.splice(array_key, 1);
       } 
      }
  }

  async opencart(){
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass:'cart-modal'
    });
    modal.present();
  }

  setBrand() {
    let brand = {
      brandname: this.brandArray,
      quantity:this.qtyArray
    }
    return brand;
  }

  getFilter(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.groceryList = this.router.getCurrentNavigation().extras.state.groceryList;
        this.groceryBrand = this.router.getCurrentNavigation().extras.state.groceryFil.brand;
        this.groceryQty = this.router.getCurrentNavigation().extras.state.groceryFil.quantity;
        this.groceryPrice = this.router.getCurrentNavigation().extras.state.groceryFil.price;
      }
  });
  }

  applyFilter(){
    let navigationExtras: NavigationExtras={
      state:{
        groceryList:this.groceryList,
        groceryFilter:this.setBrand()
      }
    }
    this.router.navigate(['grocery-filterlist'],navigationExtras);
    // console.log(this.setBrand());
    // console.log(this.groceryList);
  }

  back(){
    this.navCtrl.navigateBack('grocery-level2');
  }
}
