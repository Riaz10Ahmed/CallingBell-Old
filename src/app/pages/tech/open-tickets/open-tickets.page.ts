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
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-open-tickets',
  templateUrl: './open-tickets.page.html',
  styleUrls: ['./open-tickets.page.scss'],
})
export class OpenTicketsPage implements OnInit {

  ticket:any;

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private alertService: AlertService,
    private router: Router,
    ) { 

  }

  ngOnInit() {
  	this.getTickets();
  }

  getTickets(){
      this.ticket = [
        {"number":"IGLT0010","status":"Technician on the way" },{"number":"IGLT0011","status":"Processing Approval"},{"number":"IGLT0012","status":"Order Received"},
        {"number":"IGLT0013","status":"open"},{"number":"IGLT00114","status":"open"},{"number":"IGLT0015","status":"open"}
      ]
  }

  viewTicket(t){
    this.navCtrl.navigateForward('ticket-detail');
  }

  logout() {
    this.authService.techlogout();
    this.navCtrl.navigateRoot('/');
  }


}
