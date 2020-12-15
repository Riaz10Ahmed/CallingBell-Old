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
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supply-estimate',
  templateUrl: './supply-estimate.page.html',
  styleUrls: ['./supply-estimate.page.scss'],
})
export class SupplyEstimatePage implements OnInit {
	
	public category: any[];
    public product: any[];
    // public cities: any[];

    public selectedProduct: any[];
    // public selectedCities: any[];

    public cCategory: any;
    public pProduct: any;

  //  public estimateForm: FormGroup;
  // private itemCount: number = 1;

   public myForm: FormGroup;

  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router,
              public toastCtrl: ToastController,
              // private formBuilder: FormBuilder,
              private _fb: FormBuilder) 
  { 
    //   this.estimateForm = formBuilder.group({
    //   item1: ['', Validators.required],
    //   qty1: ['', Validators.required]
    // });
  }

   ngOnInit() {
  	this.initializeCat();
    this.initializeProd();
    // this.initializeCity();
     this.myForm = this._fb.group({
            category: ['', Validators.required],
            products: this._fb.array([
                this.initProduct(),
            ])
        });

  }

  initProduct() {
        // initialize our address
        return this._fb.group({
            productName: ['', Validators.required],
            quantity: ['', Validators.required],
            rate:[],
            total:[ ],
            grandtotal:[]
        });
    }

    addProduct() {
    // add address to the list
    const control = <FormArray>this.myForm.controls['products'];
    control.push(this.initProduct());
}

removeProduct(i: number) {
    // remove address from the list
    const control = <FormArray>this.myForm.controls['products'];
    control.removeAt(i);
}


    save(model,msg:any) {
        // call API to save customer
        console.log(model.value); 
        const toast = this.toastCtrl.create({
          animated:true,
         message: msg,
         duration: 3000,
         position: 'middle',
         mode:'md',
         cssClass:"toastheight",
         color: 'redtwo',
         }).then(toast => {
           toast.present();
         });
        this.navCtrl.navigateBack('tech-home');
    }

  // addControl(){
  //   this.itemCount++;
  //   this.estimateForm.addControl('item' + this.itemCount, new FormControl('', Validators.required));
  // }

  // removeControl(control){
  //   this.estimateForm.removeControl(control.key);
  // }

  // submit(){
  //   console.log(this.estimateForm.value);
  // }

  initializeCat(){
    this.category = [
        {id: 1, name: 'Electrical Related'},
        {id: 2, name: 'Plumbing Related'},
        {id: 3, name: 'A/C Related'},
        {id: 4, name: 'Batteries Related'},
        {id: 5, name: 'RO Purification'},
    ];
    }

    initializeProd(){
    this.product = [
        {id: 1, name: 'Wire (5 m)', cat_id: 1, cat_name: 'Electrical Related', rate:'30'},
        {id: 2, name: 'Wire (10 m)', cat_id: 1, cat_name: 'Electrical Related',rate:'50'},
        {id: 3, name: 'Wire (20 m)', cat_id: 1, cat_name: 'Electrical Related', rate:'80'},
        {id: 4, name: 'Screws(1 inch)', cat_id: 1, cat_name: 'Electrical Related', rate:'100'},
        {id: 5, name: 'Screws(2 inch)', cat_id: 1, cat_name: 'Electrical Related', rate:'150'},
        {id: 6, name: 'Switches', cat_id: 1, cat_name: 'Electrical Related', rate:'10'},
        {id: 7, name: 'Sockets', cat_id: 1, cat_name: 'Electrical Related', rate:'50'},
        {id: 12, name: 'Labour Cost', cat_id: 1, cat_name: 'Electrical Related', rate:'50'},
        {id: 8, name: 'Pipes', cat_id: 2, cat_name: 'Plumbing Related', rate:'100'},
        {id: 9, name: 'Clamp', cat_id: 2, cat_name: 'Plumbing Related', rate:'20'},
        {id: 10, name: 'Fitters', cat_id: 2, cat_name: 'Plumbing Related', rate:'45'},
        {id: 11, name: 'Sockets', cat_id: 2, cat_name: 'Plumbing Related', rate:'45'},
        {id: 13, name: 'Labour Cost', cat_id: 2, cat_name: 'Plumbing Related', rate:'50'},  
    ];
    }

    // initializeCity(){
    // this.cities = [
    //     {id: 1, name: 'City of Alor Gajah 1', state_id: 1, district_id: 1},
    //     {id: 2, name: 'City of Alor Gajah 2', state_id: 1, district_id: 1},
    //     {id: 3, name: 'City of Jasin 1', state_id: 1, district_id: 2},
    //     {id: 4, name: 'City of Muar 1', state_id: 2, district_id: 3},
    //     {id: 5, name: 'City of Muar 2', state_id: 2, district_id: 3},
    //     {id: 6, name: 'City of Segamat 1', state_id: 2, district_id: 4},
    //     {id: 7, name: 'City of Shah Alam 1', state_id: 3, district_id: 5},
    //     {id: 8, name: 'City of Klang 1', state_id: 3, district_id: 6},
    //     {id: 9, name: 'City of Klang 2', state_id: 3, district_id: 6}
    // ];
    // }

    setProductValues(cCategory) {
        this.selectedProduct = this.product.filter(product => product.cat_id == cCategory.id)
    }

    // setCityValues(sDistrict) {
    //     this.selectedCities = this.cities.filter(city => city.district_id == sDistrict.id);
    // }
     logout() {
    this.authService.techlogout();
    this.navCtrl.navigateRoot('/');
  }
}
