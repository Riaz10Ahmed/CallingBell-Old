import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from  '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
@Component({
  selector: 'app-asset-info',
  templateUrl: './asset-info.page.html',
  styleUrls: ['./asset-info.page.scss'],
})
export class AssetInfoPage implements OnInit {

	sliderOpts = {
		zoom:false,
		slidesPerView:2.5,
		// centeredSlides:true,
		spaceBetween:20
	};

  constructor(private modalCtrl:ModalController,
			  private navCtrl:NavController) {

   }

  ngOnInit() {
  }

  openPreview(img){
  	this.modalCtrl.create({
  		component:ImageModalPage,
  		componentProps:{
  			img:img
  		}
  	}).then(modal => modal.present());
  }

  back(){
    this.navCtrl.navigateBack('view-asset');
  }
}
