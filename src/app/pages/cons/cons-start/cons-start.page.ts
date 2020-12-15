import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cons-start',
  templateUrl: './cons-start.page.html',
  styleUrls: ['./cons-start.page.scss'],
})
export class ConsStartPage implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  appCons(){
  	this.navCtrl.navigateForward('cons-login');
  }

  prodCons(){
  	this.navCtrl.navigateForward('cons-login');
  }

  back(){
    this.navCtrl.navigateBack('/');
  }
}
