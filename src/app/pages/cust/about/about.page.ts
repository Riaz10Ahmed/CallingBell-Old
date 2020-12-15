import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  lat:any;
  lng:any;
  address:any;
  result1:any;
  constructor(private geolocation: Geolocation,
    public authService: AuthService,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.getLoc();
    this.getAddress();
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
            this.getAddress();
            this.authService.setLocation(this.lat,this.lng).subscribe(result =>{
              console.log(result);
            })
            },er=>{
              //alert("error getting location")
              // alert('Can not retrieve Location' + er)
              console.log('Can not retrieve Location' + er);
            }).catch((error) => {
            //alert('Error getting location'+JSON.stringify(error));
            // alert('Error getting location - '+JSON.stringify(error))
            console.log('Error getting location - '+JSON.stringify(error));
            });
  }

  getAddress(){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  
  this.nativeGeocoder.reverseGeocode(this.lat, this.lng, options)
    .then((result: NativeGeocoderResult[]) => {
      this.address = JSON.stringify(result[0]);
      this.result1 = result;
      console.log(JSON.stringify(result[0]));
      console.log(result);
      
    })
    .catch((error: any) => console.log(error));
  // this.nativeGeocoder.forwardGeocode('Berlin', options)
  //   .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
  //   .catch((error: any) => console.log(error));
  }
}
