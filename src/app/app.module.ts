import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,RouteReuseStrategy,Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Components
import { SupportComponent } from './components/support/support.component';
import { SupportcallComponent } from './components/supportcall/supportcall.component';
import { AssetimageComponent } from './components/assetimage/assetimage.component';

import { IonicStorageModule } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './services/env.service';

import { FormBuilder, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
// Camera 
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer,FileTransferObject,FileUploadOptions } from '@ionic-native/file-transfer/ngx';

//geo location
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { ImageModalPageModule } from './pages/cust/image-modal/image-modal.module';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { CartPageModule } from './pages/cust/cart/cart.module';

//image picker
import { ImagePicker } from '@ionic-native/image-picker/ngx';

//network
import { Network } from '@ionic-native/network/ngx';

//device
import { Device } from '@ionic-native/device/ngx';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Uid } from '@ionic-native/uid/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@NgModule({
  declarations: [AppComponent, SupportComponent, SupportcallComponent, AssetimageComponent],
  entryComponents: [SupportComponent, SupportcallComponent, AssetimageComponent],
  imports: [
  BrowserModule, 
  // BrowserAnimationsModule,
  IonicModule.forRoot(), 
  AppRoutingModule,
  HttpClientModule,
  IonicStorageModule.forRoot(),
  ReactiveFormsModule,
  ImageModalPageModule,
  CartPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage,
    Camera,
    File,
    FileTransfer,
    FileTransferObject,
    WebView,
    Geolocation,
    FilePath,
    EnvService,
    SocialSharing,
    LottieSplashScreen,
    ImagePicker,
    Network,
    Device,
    Contacts,
    UniqueDeviceID,
    Uid,
    AndroidPermissions,
    NativeGeocoder
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
