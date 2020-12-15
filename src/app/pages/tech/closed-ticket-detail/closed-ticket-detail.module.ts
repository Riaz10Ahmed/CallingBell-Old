import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClosedTicketDetailPage } from './closed-ticket-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ClosedTicketDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClosedTicketDetailPage]
})
export class ClosedTicketDetailPageModule {}
