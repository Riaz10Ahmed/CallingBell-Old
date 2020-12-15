import { Injectable } from '@angular/core';

//image provider
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://vaccrm.com';
  TECH_URL = 'http://vex.vaccrm.com';

  NEW_API_URL = 'http://apiv1.iglobesystems.com:8000';
  IMG_API_URL = 'http://apiv1.iglobesystems.com:8000/assets/img/app/';

  // base64img:string='';
  // url:'http://vaccrm.com/iglobe/CBA/api_v1/unwanted/image.php';
  constructor(public http: HttpClient) { }
  //  setImage(img){
  //   this.base64img=img;
  // }
  // getImage(){
  //   return this.base64img;
  // }
}
