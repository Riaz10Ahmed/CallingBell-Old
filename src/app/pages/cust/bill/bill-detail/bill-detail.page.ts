import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.page.html',
  styleUrls: ['./bill-detail.page.scss'],
})
export class BillDetailPage implements OnInit {
  billId:any
  orderDetails:any;
  purchaseDetails:any;
  products:any;
  services:any;
  constructor(private route:ActivatedRoute,
    private router: Router,
    public authService: AuthService, 
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.billId = this.router.getCurrentNavigation().extras.state.bill.id;
         this.authService.billDetail(this.billId).subscribe(result => {
           console.log(result);
           this.orderDetails = result['data'].bill_detail;
           this.purchaseDetails = result['data'].bill_item;
           this.products = result['data'].bill_item.products;
           this.services = result['data'].bill_item.services;
          });
      }
  });
  }

}
