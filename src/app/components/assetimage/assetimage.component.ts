import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions,PictureSourceType } from '@ionic-native/camera/ngx';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController,
  NavParams
} from '@ionic/angular';
import { FileTransfer,FileUploadOptions,FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-assetimage',
  templateUrl: './assetimage.component.html',
  styleUrls: ['./assetimage.component.scss'],
})
export class AssetimageComponent implements OnInit {
  msg:any;
  imageData:any='';
  image:any='';

  constructor(private navParams:NavParams,
    private camera: Camera,
    public loadingCtrl: LoadingController, 
    private transfer: FileTransfer, 
    public popoverCtrl:PopoverController ) { }

  ngOnInit() {
    this.msg=this.navParams.get('img');
    console.log(this.msg);
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
    this.popoverCtrl.dismiss()
    fileTransfer.upload(this.imageData, 'http://apiv1.iglobesystems.com:8000/api_v1/assets/add', options1)
    .then((data) => {
    // success
    console.log(data);
    loading.dismiss();
    alert("success");
    },(err) => {
      // error
      alert("error"+JSON.stringify(err));
      loading.dismiss()
    });
  }
  
}
