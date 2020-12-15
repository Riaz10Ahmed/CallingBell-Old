import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { ActivatedRoute,Router, NavigationExtras } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-quick-buy',
  templateUrl: './quick-buy.page.html',
  styleUrls: ['./quick-buy.page.scss'],
})
export class QuickBuyPage implements OnInit {
  public category: any[];
  public subcategory:any[];
  public brand: any[];
  public product: any[];

  public selectedSubCategory:any[];
  public selectedBrands: any[];
  public selectedProducts: any[];

  public cCategory: any;
  public sSubCategory:any;
  public bBrand: any;

  public onOrderForm: FormGroup;
  constructor( private formBuilder: FormBuilder,
              private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
    this.initializeCategory();
    this.initializeSubCategory();
    this.initializeBrand();
    this.initializeProduct();
    this.onOrderForm = this.formBuilder.group({
      'Category': [null, Validators.compose([Validators.required])],
      'SubCategory': [null, Validators.compose([Validators.required])],
      'Brand': [null, Validators.compose([Validators.required,])],
      'Product': [null, Validators.compose([Validators.required,])],
      'Quantity': [null, Validators.compose([Validators.required,])]
    });
  }

  // initializeCategory(){
  //   this.category = [
  //       {id: 1, name: 'Soap'},
  //       {id: 2, name: 'Shampoo'},
  //       {id: 3, name: 'Face Wash'}
  //   ];
  //   }

    initializeCategory(){
      this.category = [
          {id: 1, name: 'Bathing Products'},
          {id: 2, name: 'Cleaning Products'},
          {id: 3, name: 'Diary Products'}
      ];
      }

  initializeSubCategory(){
    this.subcategory=[
      {id:1, name:'Soap', category_id: 1},
      {id:2, name:'Shampoo', category_id: 1},
      {id:3, name:'Face Wash', category_id: 1},
      {id:4, name:'Floor Cleaner', category_id: 2},
      {id:5, name:'Bathroom Cleaner', category_id: 2},
      {id:6, name:'Curd', category_id: 3},
    ]
  }

    // initializeBrand(){
    // this.brand = [
    //     {id: 1, name: 'Dove', category_id: 1, category_name: 'Soap'},
    //     {id: 2, name: 'Himalaya', category_id: 1, category_name: 'Soap'},
    //     {id: 3, name: 'Sunsilk', category_id: 2, category_name: 'Shampoo'},
    //     {id: 4, name: 'Himalaya', category_id: 2, category_name: 'Shampoo'},
    //     {id: 5, name: 'Garnier', category_id: 3, category_name: 'Face Wash'},
    //     {id: 6, name: 'Nivea', category_id: 3, category_name: 'Face Wash'}
    // ];
    // }

    initializeBrand(){
      this.brand = [
          {id: 1, name: 'Dove', subcategory_id: 1},
          {id: 2, name: 'Himalaya', subcategory_id: 1},
          {id: 3, name: 'Sunsilk', subcategory_id: 2 },
          {id: 4, name: 'Himalaya', subcategory_id: 2 },
          {id: 5, name: 'Garnier', subcategory_id: 3},
          {id: 6, name: 'Nivea', subcategory_id: 3},
          {id: 7, name: 'Lizol', subcategory_id: 4},
          {id: 8, name: 'Harpic', subcategory_id: 4},
          {id: 9, name: 'Harpic', subcategory_id: 5},
          {id: 10, name: 'Lizol', subcategory_id: 5},
          {id: 11, name: 'Amul', subcategory_id: 6},
          {id: 12, name: 'Hatsun', subcategory_id: 6},
      ];
      }

    // initializeProduct(){
    // this.product = [
    //     {id: 1, name: 'Dove pink - 50g ', category_id: 1, brand_id: 1},
    //     {id: 2, name: 'Dove pink - 100g', category_id: 1, brand_id: 1},
    //     {id: 3, name: 'Himalaya herbal - 50g', category_id: 1, brand_id: 2},
    //     {id: 4, name: 'Sunsilk black', category_id: 2, brand_id: 3},
    //     {id: 5, name: 'Sunsilk white', category_id: 2, brand_id: 3},
    //     {id: 6, name: 'Himalaya herbal - 150ml', category_id: 2, brand_id: 4},
    //     {id: 7, name: 'Garnier herbal - 50g', category_id: 3, brand_id: 5},
    //     {id: 8, name: 'Nivea - 100g', category_id: 3, brand_id: 6},
    //     {id: 9, name: 'Nivea men - 50g', category_id: 3, brand_id: 6}
    // ];
    // }

    initializeProduct(){
      this.product = [
          {id: 1, name: 'Dove pink - 50g ', subcategory_id: 1, brand_id: 1},
          {id: 2, name: 'Dove pink - 100g', subcategory_id: 1, brand_id: 1},
          {id: 3, name: 'Himalaya herbal - 50g', subcategory_id: 1, brand_id: 2},
          {id: 4, name: 'Sunsilk black', subcategory_id: 2, brand_id: 3},
          {id: 5, name: 'Sunsilk white', subcategory_id: 2, brand_id: 3},
          {id: 6, name: 'Himalaya herbal - 150ml', subcategory_id: 2, brand_id: 4},
          {id: 7, name: 'Garnier herbal - 50g', subcategory_id: 3, brand_id: 5},
          {id: 8, name: 'Nivea - 100g', subcategory_id: 3, brand_id: 6},
          {id: 9, name: 'Nivea men - 50g', subcategory_id: 3, brand_id: 6},
          {id: 9, name: 'Lizol pink - 100ml', subcategory_id: 4, brand_id: 7},
          {id: 9, name: 'lizol pink - 200ml', subcategory_id: 4, brand_id: 7},
          {id: 9, name: 'Harpic - 100ml', subcategory_id: 4, brand_id: 8},
          {id: 9, name: 'Harpic - 200ml', subcategory_id: 4, brand_id: 8},
          {id: 9, name: 'Harpic - 100ml', subcategory_id: 5, brand_id: 9},
          {id: 9, name: 'Harpic - 200ml', subcategory_id: 5, brand_id: 9},
          {id: 9, name: 'Lizol pink - 100ml', subcategory_id: 5, brand_id: 10},
          {id: 9, name: 'Lizol pink - 200ml', subcategory_id: 5, brand_id: 10},
          {id: 9, name: 'Amul - 50g', subcategory_id: 6, brand_id: 11},
          {id: 9, name: 'Amul - 100g', subcategory_id: 6, brand_id: 11},
          {id: 9, name: 'Hatsun - 50g', subcategory_id: 6, brand_id: 12},
          {id: 9, name: 'Hatsun - 100g', subcategory_id: 6, brand_id: 12},
      ];
      }
  setSubCategoryValues(cCategory) {
      this.selectedSubCategory = this.subcategory.filter(subcategory => subcategory.category_id == cCategory.id)
  }

  setBrandValues(sSubCategory) {
      this.selectedBrands = this.brand.filter(brand => brand.subcategory_id == sSubCategory.id)
  }

  setProductValues(bBrand) {
      this.selectedProducts = this.product.filter(product => product.brand_id == bBrand.id);
  }

  item(){
    console.log(this.onOrderForm.value);
    var C = this.onOrderForm.value.Category.name; 
    var S = this.onOrderForm.value.SubCategory.name;
    var B = this.onOrderForm.value.Brand.name; 
    var P = this.onOrderForm.value.Product; 
    var Q = this.onOrderForm.value.Quantity; 
    var item = C+'-'+S+'-'+B+'-'+P+'-'+Q;
    console.log(C,'-',S,'-',B,'-',P,'-',Q);
    console.log(item);
  }
}
