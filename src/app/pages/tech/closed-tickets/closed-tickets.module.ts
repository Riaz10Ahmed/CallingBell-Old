import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClosedTicketsPage } from './closed-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: ClosedTicketsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClosedTicketsPage]
})
export class ClosedTicketsPageModule {}
