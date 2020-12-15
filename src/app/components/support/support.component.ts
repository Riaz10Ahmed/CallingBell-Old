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
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras,ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartPage } from '../../pages/cust/cart/cart.page';
import { AssetimageComponent } from '../assetimage/assetimage.component';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
public onSupportForm :FormGroup;
id:any;

public assetProduct=[
  {id:1,name:"product image"},
  {id:2,name:"invoice image"},
  {id:3,name:"warranty image"},
  {id:4,name:"service bill image"},
  {id:5,name:"insurance image"},
]
  constructor(public authService: AuthService, 
              private route:ActivatedRoute,
              private navParams:NavParams,  
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public modalCtrl:ModalController,
              public navCtrl: NavController,
              private formBuilder: FormBuilder, 
              private router: Router,
              private popoverCtrl:PopoverController) 
  {}
  ngOnInit() {
    this.id=this.navParams.get('id');
    console.log(this.id);
  }

  async captureImg(img:any){
    const popover = await this.popoverCtrl.create({
      component: AssetimageComponent,
      componentProps:{
        img:img
      },
      animated: true,
      showBackdrop: true,
    });
    return await popover.present()
  }
}
