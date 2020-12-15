import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.page.html',
  styleUrls: ['./bill-list.page.scss'],
})
export class BillListPage implements OnInit {
  billList:[];
  constructor( public authService: AuthService,
    private alertService: AlertService,
    private router: Router,) { }

  ngOnInit() {
    this.authService.billList().subscribe(
      result =>{
        console.log(result);
        this.billList = result['data'];
      });
  }

  billDetail(bill:Object){
    let navigationExtras: NavigationExtras={
      state:{
        bill:bill
      }
    }
    this.router.navigate(['bill-detail'],navigationExtras);
  }

}
