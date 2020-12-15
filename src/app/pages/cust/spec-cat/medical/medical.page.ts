import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-medical',
  templateUrl: './medical.page.html',
  styleUrls: ['./medical.page.scss'],
})
export class MedicalPage implements OnInit {
  public medicalservices=[
    {id:25,name:"Doctor on call",image_url:"assets/img/flaticon/medical/chat.png"},
    {id:25,name:"second opinion",image_url:"assets/img/flaticon/medical/doctor.png"},
    {id:25,name:"area specialist",image_url:"assets/img/flaticon/medical/stethoscope.png"},
    {id:25,name:"medicines purchase",image_url:"assets/img/flaticon/medical/pills.png"},
    {id:25,name:"diagnostic centers",image_url:"assets/img/flaticon/medical/medical-record.png"},
    {id:25,name:"remainders",image_url:"assets/img/flaticon/medical/checkup.png"},
  ]
  constructor(public authService: AuthService, 
    public alertService: AlertService, 
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController, 
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }
}
