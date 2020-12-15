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

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {
    id:any;
	ticket:any;
  constructor(private route:ActivatedRoute,
              public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router) { }

   ngOnInit() {
  	this.viewTicket();
  }

   viewTicket(){
     this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.id = this.router.getCurrentNavigation().extras.state.t.id;
    		var body='';
       
          this.authService.viewTicket(this.id,body).subscribe(result =>{
               console.log(result);
               this.ticket = result['message'][0];
               console.log(this.ticket);
          });
        }

    });
  }

  prodEstimate(){
    this.navCtrl.navigateForward('supply-estimate');
  }

  editTicket(t){
      let navigationExtras: NavigationExtras={
      state:{
        t:t
      }
    }
    this.router.navigate(['edit-ticket'],navigationExtras);
    console.log(t);
  }

  logout() {
    this.authService.techlogout();
    this.navCtrl.navigateRoot('/');
  }
}
