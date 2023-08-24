import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import  { DataService } from 'src/app/services/data.service'
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  li:any;
  lis=[];
  totalPrice:number = 0;
  itemdata:any=[];
  cartQtt:number;
  account_id:number;
  favdata:any = [];
  constructor(private apiService: ApiService,private routes: Router, private dataSrv: DataService
    ,private toastr: ToastrService,private notifyService:CommonService ) { }

  ngOnInit(): void {
    this.getdataFavo();
    this.getdat();
  }

  getdataFavo() {
    this.apiService.getAllProductFavorite().subscribe(Response => {
      if(Response) {
        this.li=Response;
        this.lis=this.li.result;
      }else {
       console.log('that bai')
      }
    });
  }
  showdetail(id:any) {
    this.routes.navigate([`shop-detail/${id}`])
  }

  addTocarta(data:any) {
    this.apiService.addTocart(data);
    this.dataSrv.saveChange({ cartQtt: this.apiService.getTotalQtt() })
    this.notifyService.showSuccessWithTimeout("Added to cart", "Notification", 1000);
  }
  addtowish(product_id:any) {
   let a = sessionStorage.getItem('login');
    if(a){
      let json = JSON.parse(a)
      this.account_id = json[0].id
      let data = {
        account_id: this.account_id,
        product_id: product_id
      }
      this.apiService.addfavorite(data).subscribe((res:any) => {
        if(res.result.insertId == 0) {
          let idx:any = this.favdata.findIndex((obj:any) => {
            return obj.id == product_id;
          });
          if(idx == -1) {
            let faj = this.apiService.getProductById(product_id, this.lis);
            this.favdata.push(faj);
          }else {
            this.getdataFavo();
            this.removeFavorie(this.favdata, idx);
            this.notifyService.showSuccessWithTimeout("Unliked successfully", "Notification", 1000);
          }
        
        }else {
          this.getdataFavo();
          let faj = this.apiService.getProductById(product_id, this.lis);
          this.favdata.push(faj);
          this.setdata(this.favdata);
        }
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to login',
      });
    }

  }

  getdat() {
    let a = sessionStorage.getItem('favorite');
    if(a) this.favdata = JSON.parse(a);
  }
  setdata(data:any) {
    let json = JSON.stringify(data);
    sessionStorage.setItem('favorite', json)
  }

  removeFavorie(data:any, idx:number) {
    data.splice(idx, 1);
    this.setdata(data)
  }
 
}
