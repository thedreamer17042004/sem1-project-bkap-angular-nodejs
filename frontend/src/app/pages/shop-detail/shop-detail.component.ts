import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute , Params} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { CommonService } from 'src/app/services/common.service';

declare var $:any;
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  li:any;
  lis=[];
  data:any;
  id: any;
  amount:any = 1;
  nameCategory:any;
  constructor(private apiService: ApiService,private notifyService:CommonService, 
    private activatedRoute: ActivatedRoute,private dataSrv: DataService) { }

  ngOnInit(): void {
    


  $('.produc-one').owlCarousel({
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
})

  this.getparams();
  this.showdetail();
  // this.getcategory(this.data.category_id)
  


  }

  getparams() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  showdetail() {
    this.apiService.getAllProduct().subscribe((res:any) => {
     let resul =  this.apiService.getProductById(this.id, res.result);
     this.data = resul;
     this.getcategory(this.data.category_id)
    })
  }


  

  addTocarta2(data:any, amount:any) {
    this.apiService.addTocart2(data, amount);
    this.dataSrv.saveChange({ cartQtt: this.apiService.getTotalQtt() });
    this.notifyService.showSuccessWithTimeout("Added to cart", "Notification", 1000);


  }
  incres() {
    if(this.amount ==  100) {
      this.amount == 100
    }else {
    ++this.amount

    }
  }
  desc() {
    if(this.amount ==  1) {
      this.amount == 1
    }else {
      --this.amount

    }
  }

  getcategory(id:any) {
    this.apiService.getCategory(id).subscribe((res:any) => {
      this.nameCategory = res.result[0].name
    });
  }
}
