import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { 
  }

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000,
      position: 'bottom',
      color: 'gold',
      mode:'ios',
      showCloseButton: true,
      closeButtonText:'Got it',
      }).then(toast => {
        toast.present();
      });
  }

  async welcomeNote(message:any){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'middle',
      mode:'md',
      cssClass:"welcomeNote",
      color: 'redtwo',
      }).then(toast => {
        toast.present();
      });
  }

  async cartNote(message:any){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      mode:'ios',
      color:'darkblue',
      }).then(toast => {
        toast.present();
      });
  }

  async developmentNote(message:any){
    const toast = await this.toastController.create({
      message:message,
      duration:3000,
      position:'middle',
      color:'gold',
      mode:'ios'
    }).then(toast => {
      toast.present();
    })
  }

}

