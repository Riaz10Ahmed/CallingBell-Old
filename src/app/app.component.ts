import { Component, OnInit  } from '@angular/core';

import { Platform, NavController, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import { AuthService } from './services/auth.service';
import { timer } from 'rxjs/observable/timer';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  user: any;
  public appPages: Array<Pages>;
  userProfile: any;
  userInfo:any;
  showSplash = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public authService: AuthService,
    private storage: NativeStorage,
    // private lottie: LottieSplashScreen,
    private network: Network, 
    public toastController: ToastController,
  ) {
    this.appPages = [
      {
        title: 'Home',
        url: 'cust-home',
        direct: 'root',
        icon: 'ios-home',
      },
      {
        title:'Add Asset',
        url:'add-asset', 
        direct:'forward',
        icon: 'ios-add-circle-outline'
      },
      {
        title:'View Asset',
        url:'view-asset', 
        direct:'forward',
        icon: 'ios-photos'
      },
      {
        title:'Product Category',
        url:'trending', 
        direct:'forward',
        icon: 'ios-tv'
      },
      {
        title:'Your Orders',
        url:'bill-list',
        direct:'forward',
        icon:'ios-list-box'
      },
      {
        title:'Service & Product Status',
        url:'service-status',
        direct:'forward',
        icon:'ios-construct'
      },
      {
        title: 'About',
        url: 'about',
        direct: 'forward',
        icon: 'ios-information-circle-outline'
      },
      {
        title:'Adding Grocery',
        url:'add-grocery',
        direct:'forward',
        icon:'cart'
      },
      ];
    this.initializeApp();
  }  

initializeApp() {
    this.platform.ready().then(() => {
      // console.log(this.storage.getItem('token'));
      let disconnectSubscription = this.network.onDisconnect().subscribe(async () => {
        // alert('No Network :-( ');
         const toast = await this.toastController.create({
          message: 'Oops! You are offline. Try connecting internet again!.',
          showCloseButton: true,
          color:'gold',
          mode:'ios',
        });
        toast.present();
      }); 
  
      // uncomment during build
      // this.userInfo = this.storage.getItem('user');
      // this.storage.getItem('user').then(data => {
      //   this.navCtrl.navigateRoot('cust-home');
      //   this.splashScreen.hide();
      // }, err =>{
      //   this.navCtrl.navigateRoot('cust-login');
      //   this.splashScreen.hide();
      // }) 
      
      let connectSubscription = this.network.onConnect().subscribe(async () => {
        // alert('Network Connected! Restart app for better performance!');
        const toast = await this.toastController.create({
          message: 'Hayyaah! You are online!.',
          duration: 5000,
          showCloseButton: true,
          color:'gold',
          mode:'ios',
        });
        toast.present();
      });
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      // onesignal 

      // var notificationOpenedCallback = function(jsonData) {
      //   console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      // };
      // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
      // window["plugins"].OneSignal
      //   .startInit("1c71ed87-8cb0-497b-b79b-46845489ceb7", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
      //   .handleNotificationOpened(notificationOpenedCallback)
      //   .endInit();

      timer(3000).subscribe(()=> this.showSplash = false)
    }).catch(() => {});
  }

  ngOnInit() {
    //this.getUser();
  }

  getUser() {
    this.authService.getUserProfile().subscribe(data =>{
      console.log(data);
      this.user = data;
    });
  }

  goToEditProfile() {
      this.navCtrl.navigateForward('cust-profile');
  }

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/');
  }

}