import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProdLatestArrivalsPage } from './prod-latest-arrivals.page';

const routes: Routes = [
  {
    path: '',
    component: ProdLatestArrivalsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdLatestArrivalsPage]
})
export class ProdLatestArrivalsPageModule {}
