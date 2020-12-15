import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertService } from 'src/app/services/alert.service';
import { Router,ActivatedRoute} from '@angular/router';

import { Device } from '@ionic-native/device/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-otp-form',
  templateUrl: './otp-form.page.html',
  styleUrls: ['./otp-form.page.scss'],
})
export class OtpFormPage implements OnInit {
  public onOtpForm: FormGroup;
  number:any;
  public allContacts: any;
  IMEI:any;
  UniqueDeviceID:string;

  myContacts:Contact[]=[];

  lat:any;
  lng:any;
  location:String;
  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: NativeStorage,
    private alertService: AlertService,
    private router: Router,
    private route:ActivatedRoute,
    private device: Device,
    private contacts: Contacts,
    private uniqueDeviceID: UniqueDeviceID,
    private uid: Uid,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    ) { 
      this.contacts.find(['*'], {filter: "", multiple: true})
      .then((contacts:Contact[])=> {
        this.myContacts = contacts;
        // alert(this.allContacts.length);
        // alert(data);
      });
      this.getPermission();
      this.getLoc();
    }

  ngOnInit() {
    this.getNumber();
    this.onOtpForm = this.formBuilder.group({
      'otp': [null, Validators.compose([
        Validators.required, Validators.maxLength(6),
      ])],
    });
  }

  getLoc(){
    this.geolocation.getCurrentPosition(
      {maximumAge: 1000, timeout: 5000,
       enableHighAccuracy: true }
      ).then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            //alert("r succ"+resp.coords.latitude)
            alert(JSON.stringify( resp.coords));
      
            this.lat=resp.coords.latitude
            this.lng=resp.coords.longitude
            console.log(this.lat,this.lng);
            this.location = this.lat + ' ' +this.lng;
            this.authService.setLocation(this.lat,this.lng).subscribe(result =>{
              console.log(result);
            })
            },er=>{
              //alert("error getting location")
              // alert('Can not retrieve Location' + er)
            }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            // alert('Error getting location - '+JSON.stringify(error))
            });
  }

  getNumber(){
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.number = this.router.getCurrentNavigation().extras.state.number;
        console.log(this.number);
      }
  });
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;
      })
      .catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = "Error! ${error}";
      });
  }
 
 
  getID_UID(type){
    if(type == "IMEI"){
      this.IMEI == this.uid.IMEI; 
      return this.uid.IMEI;
    }else if(type == "ICCID"){
      return this.uid.ICCID;
    }else if(type == "IMSI"){
      return this.uid.IMSI;
    }else if(type == "MAC"){
      return this.uid.MAC;
    }else if(type == "UUID"){
      return this.uid.UUID;
    }
  }
 
  getPermission(){ 
    this.androidPermissions.checkPermission(
      this.androidPermissions.PERMISSION.READ_PHONE_STATE
    ).then(res => {
      if(res.hasPermission){
        
      }else{
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
          // alert("Persmission Granted Please Restart App!" + res);
        }).catch(error => {
          // alert("Error! "+error);
        });
      }
    }).catch(error => {
      // alert("Error! "+error);
    });
  }


  verifyOtp(){
    let device:string ='Device UUID: ' + this.device.uuid + ' , Model: ' + this.device.model + ', Cordova Version: ' + this.device.cordova
                          + ' , Platform: ' + this.device.platform + ' , Version: ' + this.device.version + ' , Serial No: ' + this.device.serial 
                          + ' , IMEI: ' + this.uid + ' , Test: ' + this.IMEI;
    
    let phone = this.number.phone;
    let otp = this.onOtpForm.value.otp;
    this.authService.verifyOtp(phone,otp,device,this.myContacts,this.location).subscribe(
      result=>{
          if(result['status'] == true){
          console.log(result);
          console.log(result['data'].api_key);
          this.storage.setItem('user',{
            token : result['data'].api_key,
            phone : result['data'].phone,
            user_id: result['data'].user_id,
            email:result['data'].email
          }).then(()=>{
              this.navCtrl.navigateRoot('cust-home');
          })
        }else{
          this.alertService.presentToast(result['message']);
        }
      }
    )
  }
}
