import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustHomePage } from './cust-home.page';

const routes: Routes = [
  {
    path: '',
    component: CustHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ],
  declarations: [CustHomePage]
})
export class CustHomePageModule {}
