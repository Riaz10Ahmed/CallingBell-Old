import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PestControlSecondPage } from './pest-control-second.page';

const routes: Routes = [
  {
    path: '',
    component: PestControlSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PestControlSecondPage]
})
export class PestControlSecondPageModule {}
