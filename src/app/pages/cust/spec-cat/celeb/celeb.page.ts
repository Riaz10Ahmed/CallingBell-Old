import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-celeb',
  templateUrl: './celeb.page.html',
  styleUrls: ['./celeb.page.scss'],
})
export class CelebPage implements OnInit {
  public celebrations=[
    {id:25,name:"Birthday Wishes",image_url:"assets/img/flaticon/wishes/balloon.png"},
    {id:26,name:"Wedding Wishes",image_url:"assets/img/flaticon/wishes/wedding.png"},
    {id:27,name:"New Born Wishes",image_url:"assets/img/flaticon/wishes/child.png"},
    {id:28,name:"Festive Wishes",image_url:"assets/img/flaticon/wishes/diwali.png"},
  ]

  public events=[
    {id:30,name:"Corporate Events",image_url:"assets/img/flaticon/events/politics.png"},
    {id:31,name:"School Events",image_url:"assets/img/flaticon/events/garland.png"},
  ]
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {

  }

  back(){
    this.navCtrl.navigateBack('cust-home');
  }

  celeblevel2 (){
  	this.navCtrl.navigateForward('celeb-package');
  }


}
