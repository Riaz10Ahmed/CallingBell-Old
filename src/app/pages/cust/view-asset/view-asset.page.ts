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
 import { AlertService } from  'src/app/services/alert.service';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.page.html',
  styleUrls: ['./view-asset.page.scss'],
})
export class ViewAssetPage implements OnInit {

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  assetInfo(){
  	this.navCtrl.navigateForward("asset-info");
  }

  addAsset(){
    this.navCtrl.navigateForward("add-asset");
  }

}
