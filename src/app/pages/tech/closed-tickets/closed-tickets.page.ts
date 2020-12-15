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
  selector: 'app-closed-tickets',
  templateUrl: './closed-tickets.page.html',
  styleUrls: ['./closed-tickets.page.scss'],
})
export class ClosedTicketsPage implements OnInit {

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
    private router: Router) { }

   ngOnInit() {
  	this.getTickets();
  }

  getTickets(){
  	var body='';
  	 this.authService.closedTickets(body).subscribe(data =>{
      console.log(data);
      this.ticket = data['message'];
    });
  }

  viewTicket(t){
    let navigationExtras: NavigationExtras={
      state:{
        t:t
      }
    }
    this.router.navigate(['closed-ticket-detail'],navigationExtras);
    console.log(t);
  }

  logout() {
    this.authService.techlogout();
    this.navCtrl.navigateRoot('/');
  }

}
