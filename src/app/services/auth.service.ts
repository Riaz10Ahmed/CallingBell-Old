import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../models/user';
import { EnvService } from './env.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token: any;
  userInfo: any;
  session: any;
  id: any;
  user:any;
  pro:any;
  username:any;
  password:any;
  userid:any;

  constructor(
  	private route:ActivatedRoute,
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
    private router: Router,
    private toastController: ToastController) 
  { }
  subject = new BehaviorSubject(this.userInfo);
  
  register(body: Object) {
    return this.http.post(this.env.NEW_API_URL + '/api_v1/CustomerAuth/registration/', body);
  }

  newRequest(phone){
    const body:Object={
      "phone":phone
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/CustomerAuth/otp_sms_request',body);
  }

  otpRequest(body:Object){
    return this.http.post(this.env.NEW_API_URL + '/api_v1/CustomerAuth/otp_sms_request', body);
  }

  setLocation(lat:any,lng:any){
    const location:Object={
      "latitude":lat,
      "longitude":lng
    }
    return this.http.post(this.env.NEW_API_URL +'',location);
  }

  verifyOtp(phone,otp,device:string,contacts,geolocation){
    const body:Object={
      "phone":phone,
      "otp":otp,
      "device":device,
      "contacts":contacts,
      "geolocation":geolocation
    }
    console.log(body);
    return this.http.post(this.env.NEW_API_URL + '/api_v1/CustomerAuth/otp_sms_auth',body);
  }

  getUserDetail() {
    this.userInfo = this.storage.getItem('user');
    console.log(this.userInfo);
    console.log(this.userInfo['__zone_symbol__value']);
    return this.storage.getItem('user');
  }

  logout() {
    this.storage.remove('user');
    this.isLoggedIn = false;
    delete this.token;
    return true;
  }

  getHomeIcons(){
    this.getUserDetail();
    return this.http.post(this.env.NEW_API_URL + '/api_v1/home/home_icon',{})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  getProds(iconId){
    const body:Object = {
      "cat_id":iconId,
      "include_item":true,
      "hide_empty_cat":true
    }
    console.log(iconId);
    return this.http.post(this.env.NEW_API_URL + '/api_v1/products/GetProductCat',body)
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  getProdslt(catId){
    const body:Object = {
      "cat_id":catId,
      "include_item":true,
      "hide_empty_cat":true
    }
    console.log(catId);
    return this.http.post(this.env.NEW_API_URL + '/api_v1/products/GetProductCat',body)
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  getProdsDesc(desc){
    const body:Object = {
      "id":desc,
    }
    console.log(desc);
    return this.http.post(this.env.NEW_API_URL + '/api_v1/products/GetProductDetails',body)
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  addToCart(qty,product){
    console.log( this.userInfo['__zone_symbol__value'].token);
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "id":product.id,
      "qty":qty.qty
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/products/AddToCart', body , { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  addToServiceCart(service){
    console.log( this.userInfo['__zone_symbol__value'].token);
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "id":service.id,
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/services/AddIssues', body , { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  getCartList(){
    console.log(this.userInfo['__zone_symbol__value'].token);
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "temp":1
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/billing/CartList', body, { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  removePCartItem(i){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "id":i.product_detail.id
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/products/RemoveFromCart', body, { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  removeSCartItem(i){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "id":i.service_detail.id
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/products/RemoveFromCart', body, { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  getServiceCategory(catId){
    const body:Object = {
      "cat_id":catId,
      "include_item":true
    }
    console.log(catId);
    return this.http.post(this.env.NEW_API_URL + '/api_v1/services/GetServicesCat',body)
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  storeUserData(token, user) {
    this.storage.setItem('token', token);
    this.storage.setItem('user', user);
    this.user = user;
    this.token = token;
    this.isLoggedIn = true;
  }

  imageUpload(formData){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    return this.http.post(this.env.NEW_API_URL + '/api_v1/assets/add',formData,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }
 
  serviceRequest(Id:String,Notes:String,jobDate:String){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "id": Id,
      "notes":Notes,
      "job_date":jobDate
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/services/ServiceRequest',body,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  placeOrder(){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body:Object={
      "order":true
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/billing/order',body,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  billList(){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body={
      "bill_list":"all"
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/billing/GetOrdertList',body,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }
  
  billDetail(id){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body={
      "bill_id":id
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/billing/GetBillDetail',body,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  serviceStatus(){
    const headers = new HttpHeaders({
      'IG-API-KEY': this.userInfo['__zone_symbol__value'].token
    });
    const body={
      "service_id":"all"
    }
    return this.http.post(this.env.NEW_API_URL + '/api_v1/services/ServiceRequestStatus',body,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }
  





  
  login(body: Object) {
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/login/index.php', body)
      .pipe(map(res => res),
      catchError(this.handleError));
  }

  storeTechData(session,id,userid){
    this.storage.setItem('session',session);
    this.storage.setItem('id',id);
    this.storage.setItem('userid',userid);
    this.id=id;
    this.session = session;
    this.userid= userid;
    this.isLoggedIn = true;
  }

  getUserProfile(){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/profile/index.php' ,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }
  
  changePass(body:object) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/profile/passchange.php', body , { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

 

  updateUser(body: Object){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.put(this.env.API_URL + '/iglobe/CBA/api_v1/profile/save.php' ,body,{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  serviceDesc(body: Object){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/profile/custtktdetail.php',{id:body},{headers:headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  sendCode(body) {
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/login/smsapi.php', {phone: body})
    .pipe(map(res =>  res),
    catchError(this.handleError));
  }

  resetPassword(body) {
    return this.http.put(this.env.API_URL + '/iglobe/CBA/api_v1/login/FP.php', body)
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  // logout() {
  //   this.storage.remove('token');
  //   this.isLoggedIn = false;
  //   delete this.token;
  //   return true;
  // }

    techlogout() {
    this.storage.remove('session');
    this.isLoggedIn = false;
    delete this.session;
    return true;
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }

  getNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=80beb4b76ef54b69b9cd5a0241f2cf91')
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  editProfile(){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/support/editProfile.php',{ headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  postSupport(body:object) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/support/support.php', body , { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

   getIssue(pro){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    // let prod = this.pro;
    console.log(pro);
    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/support/services.php?categoryName='+pro, {headers: headers})
    .pipe(map(res => res),
      catchError(this.handleError));

  }


  getProducts() {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/prodcat.php', {headers: headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  getProductCategory(pro){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    // let prod = this.pro;
    console.log(pro);
    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/prodbrand.php?categoryName='+pro, {headers: headers})
    .pipe(map(res => res),
      catchError(this.handleError));
  }

  getProductSubCategory(pro){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/prodsubcat.php?categoryName='+pro, {headers: headers})
    .pipe(map(res => res),
      catchError(this.handleError));
  }

  getLatestArrival(prodcat,subcat){
    const headers = new HttpHeaders({
      'Authorization':this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/prodlist.php?categoryName='+ prodcat +'&subcategory='+ subcat , {headers:headers})
    .pipe(map(res => res),
      catchError(this.handleError));
  }

  getProductBrands(prodcat,subcat){
      const headers = new HttpHeaders({
      'Authorization':this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/prodlist.php?categoryName='+ prodcat +'&subcategory='+ subcat , {headers:headers})
    .pipe(map(res => res),
      catchError(this.handleError));
  }

  getProductList(cat,brand){
    const headers = new HttpHeaders({
      'Authorization':this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/prodbrand.php?categoryName='+ cat +'&brand='+ brand , {headers:headers})
    .pipe(map(res => res),
      catchError(this.handleError));
    // console.log(pro);
  }

  getProductDesc(product){
    const headers = new HttpHeaders({
      'Authorization':this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/supply/proddetail.php?id=' + product , {headers:headers})
    .pipe(map(res => res),
      catchError(this.handleError));
  }

  addProducts(){
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/asset/all.php', {headers: headers})
    .pipe(map(res => res),
    catchError(this.handleError));
  }

  // getInventory() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token
  //   });
  //   return this.http.get(this.env.API_URL + '/inventory', { headers: headers })
  //     .pipe(map(res => res),
  //       catchError(this.handleError));
  // }

  techLogin(username,password,body:String) {
    return this.http.post(this.env.API_URL + '/iglobe/modules/CBA/api.php?_operation=loginAndFetchModules&username='+ username +'&password='+ password ,body);
  }

  openTickets(body:Object){
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/tech/opentkts.php?userid='+ this.userid, body);
  }

  closedTickets(body:Object){
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/tech/closedtkts.php?userid='+ this.userid, body);
  }

  viewTicket(id,body:Object){
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/tech/tktdetail.php?id=' +id,body);
  }

    editTicket(){
    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/tech/tktstatus.php?');
  }

   updateTicket(id,number,body:object){
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/tech/tktsave.php?id=' +id+ '&number='+number,body);
  }

  consLogin(body:Object){
    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/consultant/login/index.php', body);
  }

  consProfile(){
     const headers = new HttpHeaders({
      'Authorization':this.token
    });
    return this.http.get(this.env.API_URL + '/iglobe/CBA/api_v1/consultant/profile/index.php', {headers:headers});
  }

  consChangePass(body:object) {
    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.post(this.env.API_URL + '/iglobe/CBA/api_v1/consultant/profile/passchange.php', body , { headers: headers })
    .pipe(map(res => res),
    catchError(this.handleError));
  }

}
