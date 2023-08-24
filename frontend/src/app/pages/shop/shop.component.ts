import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
declare var $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  data:any;
  category:any;
  categories:any;
  id:any;
  productname:any;
  
  constructor(private api:ApiService,private route: ActivatedRoute,private routes: Router
  , private dataSrv: DataService
    ,private toastr: ToastrService,private notifyService:CommonService 
    ) {
   
   }

  ngOnInit(): void {
    this.allprod();
    this.api.getAllCategory().subscribe((res:any) => {
      this.category = res.result;
    });

    this.onchangeSort()
  }

  allprod() {
    this.api.getAllProduct().subscribe((res:any) => {
      this.data = res.result;
    });
  }

  getid(id:any){
    this.api.getCountPro(id).subscribe((res:any) => {
     this.data = res.result;
     this.id = res.result.length;
    })
   
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.api.producsearchname(element.value).subscribe((result)=>{
        this.data=result;
      })
    }
  }

  onchangeSort() {
    var e:any = document.getElementById("idd");
    e.addEventListener('change', (e) => {
      e.preventDefault();
      var value = e.target.value;
      if(value == "all") {
       this.allprod();
      }
      var name = value.split(" ")
    this.api.sortPro(name[0], name[1]).subscribe((res:any) => {
      this.data = res.result;
    });
    })
    
  }


  showdetail(id:any) {
    this.routes.navigate([`shop-detail/${id}`])
  }

  addTocarta(data:any) {
    this.api.addTocart(data);
    this.dataSrv.saveChange({ cartQtt: this.api.getTotalQtt() })
    this.notifyService.showSuccessWithTimeout("Added to cart", "Notification", 1000);
  }

}
