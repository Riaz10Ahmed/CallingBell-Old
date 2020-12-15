import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
   Platform
} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-tech-home',
  templateUrl: './tech-home.page.html',
  styleUrls: ['./tech-home.page.scss'],
})
export class TechHomePage implements OnInit {

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService
    ) { }

  ngOnInit() {

  }


  openTickets(){
  	this.navCtrl.navigateForward('open-tickets')
  }

   closedTickets(){
      this.navCtrl.navigateForward('closed-tickets')
  }

  logout() {
    this.authService.techlogout();
    this.navCtrl.navigateRoot('/');
  }

}
