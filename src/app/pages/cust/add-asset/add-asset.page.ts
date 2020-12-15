import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Camera, CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
  ActionSheetController,
  Platform
} from '@ionic/angular';

// import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { Storage } from '@ionic/storage';
// import { FilePath } from '@ionic-native/file-path/ngx';
// import { finalize } from 'rxjs/operators';
import { FileTransfer,FileUploadOptions,FileTransferObject } from '@ionic-native/file-transfer/ngx';
// const STORAGE_KEY = 'my_images';

import { AssetimageComponent } from '../../../components/assetimage/assetimage.component';
import { SupportComponent } from '../../../components/support/support.component';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.page.html',
  styleUrls: ['./add-asset.page.scss'],
})
export class AddAssetPage implements OnInit {
  // userInfo: any;
  image:any='';
  imageData:any='';
  segment:any;
  // images = [];

  public onAddAssetForm: FormGroup;
  constructor(
              private camera: Camera,
              private transfer: FileTransfer,
              // public authService: AuthService, 
              // public alertService: AlertService, 
              public loadingCtrl: LoadingController, 
              // public alertCtrl: AlertController, 
              // public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              // private router: Router,
              public http: HttpClient,
              private formBuilder: FormBuilder,
              // private storage: Storage,
              public toastController: ToastController,
              // private file: File,
              // private webview: WebView,
              // private actionSheetController: ActionSheetController,
              // private platform: Platform,
              // private ref: ChangeDetectorRef,
              // private filePath: FilePath
              ) {
                this.segment ="Product";
               }

  ngOnInit() { 
    // this.platform.ready().then(() => {
    //   this.loadStoredImages();
    // });
     this.onAddAssetForm = this.formBuilder.group({
      'productCategory': [null, Validators.required],
      'productName': [null, Validators.required],
      'productSerialNo':[null, Validators.required],
      'productBrand': [null, Validators.required],
      'dateOfPurchase': [null, Validators.required],
      'monthsWarranty': [null, Validators.required],
      'productPrice': [null, Validators.required],
    });
  }

  async addAsset(){
    let id:number = 1;
    console.log(this.onAddAssetForm.value);
    const popover = await this.popoverCtrl.create({
      component: SupportComponent,
      componentProps:{
        id:id
      },
      // event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present()
  }

  openCam(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     //alert(imageData)
     this.imageData=imageData
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
     // Handle error
     alert("error "+JSON.stringify(err))
    });
  }

  async upload()
  {
    const loading = await this.loadingCtrl.create({
      message: 'Uploading...',
    });
    await loading.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options1: FileUploadOptions = {
       fileKey: 'file',
       fileName: 'test.jpg',
       headers: {}
    }
    console.log(this.imageData)
    console.log( options1)
    loading.dismiss();
    fileTransfer.upload(this.imageData, 'http://apiv1.iglobesystems.com:8000/api_v1/assets/add', options1)
    .then((data) => {
    // success
    loading.dismiss();
    alert("success");
    },(err) => {
      // error
      alert("error"+JSON.stringify(err));
      loading.dismiss()
    });
  }

  // scan() {
  //   const opts: DocumentScannerOptions = {
  //       sourceType: DocumentScannerSourceType.CAMERA,
  //       fileName: 'docs.jpeg',
  //       quality: 100,
  //       returnBase64: true
  //   };
  //   this.documentScanner.scanDoc(opts)
  //       .then((res: string) => console.log(res))
  //       .catch((error: any) => console.error(error));
  // }

  // loadStoredImages() {
  //   this.storage.get(STORAGE_KEY).then(images => {
  //     if (images) {
  //       let arr = JSON.parse(images);
  //       this.images = [];
  //       for (let img of arr) {
  //         let filePath = this.file.dataDirectory + img;
  //         let resPath = this.pathForImage(filePath);
  //         this.images.push({ name: img, path: resPath, filePath: filePath });
  //       }
  //     }
  //   });
  // }

  // pathForImage(img) {
  //   if (img === null) {
  //     return '';
  //   } else {
  //     let converted = this.webview.convertFileSrc(img);
  //     return converted;
  //   }
  // }
 
  // async presentToast(text) {
  //   const toast = await this.toastController.create({
  //       message: text,
  //       position: 'bottom',
  //       duration: 3000
  //   });
  //   toast.present();
  // }

  // async selectImage() {
  //   const actionSheet = await this.actionSheetController.create({
  //       header: "Select Image source",
  //       buttons: [{
  //               text: 'Load from Library',
  //               handler: () => {
  //                   this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //               }
  //           },
  //           {
  //               text: 'Use Camera',
  //               handler: () => {
  //                   this.takePicture(this.camera.PictureSourceType.CAMERA);
  //               }
  //           },
  //           {
  //               text: 'Cancel',
  //               role: 'cancel'
  //           }
  //       ]
  //   });
  //   await actionSheet.present();
  // }

  // takePicture(sourceType: PictureSourceType) {
  //   var options: CameraOptions = {
  //       quality: 100,
  //       sourceType: sourceType,
  //       saveToPhotoAlbum: false,
  //       correctOrientation: true
  //   };
 
  //   this.camera.getPicture(options).then(imagePath => {
  //       if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
  //           this.filePath.resolveNativePath(imagePath)
  //               .then(filePath => {
  //                   let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
  //                   let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
  //                   this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //               });
  //       } else {
  //           var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
  //           var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  //           this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //       }
  //   });
  // }

  //   createFileName() {
  //     var d = new Date(),
  //         n = d.getTime(),
  //         newFileName = n + ".jpg";
  //     return newFileName;
  //     }

  //   copyFileToLocalDir(namePath, currentName, newFileName) {
  //     this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
  //         this.updateStoredImages(newFileName);
  //     }, error => {
  //         this.presentToast('Error while storing file.');
  //     });
  //   }

  //   updateStoredImages(name) {
  //     console.log(name);
  //     this.storage.get(STORAGE_KEY).then(images => {
  //         let arr = JSON.parse(images);
  //         if (!arr) {
  //             let newImages = [name];
  //             this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
  //         } else {
  //             arr.push(name);
  //             this.storage.set(STORAGE_KEY, JSON.stringify(arr));
  //         }
   
  //         let filePath = this.file.dataDirectory + name;
  //         let resPath = this.pathForImage(filePath);
   
  //         let newEntry = {
  //             name: name,
  //             path: resPath,
  //             filePath: filePath
  //         };
   
  //         this.images = [newEntry, ...this.images];
  //         this.ref.detectChanges(); // trigger change detection cycle
  //     });
  // }

  // deleteImage(imgEntry, position) {
  //   this.images.splice(position, 1);
 
  //   this.storage.get(STORAGE_KEY).then(images => {
  //       let arr = JSON.parse(images);
  //       let filtered = arr.filter(name => name != imgEntry.name);
  //       this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
 
  //       var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
 
  //       this.file.removeFile(correctPath, imgEntry.name).then(res => {
  //           this.presentToast('File removed.');
  //       });
  //   });
  // }

  // startUpload(imgEntry) {
  //   console.log(imgEntry);
  //   this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
  //       .then(entry => {
  //           ( < FileEntry > entry).file(file => this.readFile(file))
  //       })
  //       .catch(err => {
  //           this.presentToast('Error while reading file.');
  //       });
  //   }

  //   readFile(file: any) {
      
      
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       console.log('test');
  //       // console.log(reader.result);
  //         const formData = new FormData();
  //         const imgBlob = new Blob([reader.result], {
  //             type: file.type
  //         });
  //         console.log('test2');
  //         formData.append('file', imgBlob, file.name);
  //         console.log(imgBlob);
  //         this.uploadImageData(formData);
  //         console.log(formData);
  //     };
  //     reader.readAsArrayBuffer(file);
  //   }

  //   async uploadImageData(formData: FormData) {
  //     console.log(formData);
      
  //     const loading = await this.loadingCtrl.create({
  //         message: 'Uploading image...',
  //     });
  //     await loading.present();
  //     console.log(formData);
      
  //     this.http.post("http://apiv1.iglobesystems.com:8000/api_v1/assets/add", formData)
  //         .pipe(
  //             finalize(() => {
  //               // console.log(formData);
  //                 loading.dismiss();
  //             })
  //         )
  //         .subscribe(res => {
  //           // console.log(res);
  //             if (res['success']) {
  //                 this.presentToast('File upload complete.')
  //             } else {
  //                 this.presentToast('File upload failed.')
  //             }
  //         });
  // }
}
