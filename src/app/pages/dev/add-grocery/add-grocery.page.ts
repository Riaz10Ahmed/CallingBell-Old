import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.page.html',
  styleUrls: ['./add-grocery.page.scss'],
})
export class AddGroceryPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
