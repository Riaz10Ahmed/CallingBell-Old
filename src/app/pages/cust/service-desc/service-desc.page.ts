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
import { Router, NavigationExtras,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-service-desc',
  templateUrl: './service-desc.page.html',
  styleUrls: ['./service-desc.page.scss'],
})
export class ServiceDescPage implements OnInit {
  status:any;
  id:any;
  constructor(public authService: AuthService,
              private route:ActivatedRoute, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private router: Router) { }

   ngOnInit() {
  	this.serviceStatus();
  }

   serviceStatus(){
       this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.id = this.router.getCurrentNavigation().extras.state.status.id;

    this.authService.serviceDesc(this.id).subscribe(data =>{
      console.log(data);
      this.status = data.message;
      if(data.response == true){
      	this.alertService.presentToast('Ticket Details');
      }else{
      	this.alertService.presentToast(data.message);
      }
    });

        }
    });

  }
}
