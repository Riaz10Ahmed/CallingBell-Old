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

//Slides
import{ IonSlides} from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
	articles:any;
  constructor(public authService: AuthService, 
              public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public navCtrl: NavController,
              private router: Router) { }
 ngOnInit() {
  	this.getnews();
  }

  getnews(){
    this.authService.getNews().subscribe(data =>{
      console.log(data);
    this.articles = data.articles;
    console.log(this.articles);
    });
  }
}
