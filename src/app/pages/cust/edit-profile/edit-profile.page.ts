import { Component, OnInit } from '@angular/core';
import { NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController,
  LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  user:any;
  public onUpdateForm :FormGroup;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService, 
    public alertService: AlertService, 
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder, 
    private router: Router) { }

   ngOnInit() {
    //this.getProfile();
    this.getUser();
     this.onUpdateForm = this.formBuilder.group({
      'occupation': [null, Validators.compose([
        Validators.required,
      ])],
      'dob': [null, Validators.compose([
        Validators.required, 
      ])],
      'street': [null, Validators.compose([
        Validators.required,
        ])],
      'city': [null, Validators.compose([
        Validators.required,
      ])],
      'state': [null, Validators.compose([
        Validators.required,
      ])],
      'zip': [null, Validators.compose([
        Validators.required,
      ])],
      'country': [null, Validators.compose([
        Validators.required,
      ])]
    });
  }

  // getProfile(){
  //   this.authService.editProfile().subscribe(data =>{
  //     console.log(data);
  //     this.user = data;
  //   });
  // }

  getUser() {
    this.authService.getUserProfile().subscribe(data =>{
      console.log(data);
      this.user = data.message;
    });
  }


 async updateUserProfile() {
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });
    
    this.authService.updateUser(this.onUpdateForm.value).subscribe(
      data => {
        console.log(data);
        if (data['response']) {
          this.navCtrl.navigateRoot('home-results');
        } else {
          this.alertService.presentToast(data['message']);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
