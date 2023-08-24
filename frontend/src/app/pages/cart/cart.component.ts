import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:any = [];
  totalPrice: any;
  shipp:any = 7;
  totalPriceAll:any;
  isDelete:boolean = false;
  constructor(private apiService: ApiService, private dataSrv: DataService) { }

  ngOnInit(): void {
   this.data = this.apiService.data;
   this.totalPrice = this.apiService.totalPrice;
   this.totalPriceAll = this.totalPrice + this.shipp
  }


  onChangeQuantity(e: any, idex: number) {
    this.apiService.update(idex, Number(e.target.value));
    this.ngOnInit();
    this.dataSrv.saveChange({ cartQtt: this.apiService.getTotalQtt() })

  }

  onRemove(idex: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your product has been deleted.',
          'success'
        )
        this.apiService.remove(idex);
        this.ngOnInit();
        this.dataSrv.saveChange({ cartQtt: this.apiService.getTotalQtt() })
        
      }else {
        return false;
      }
    })
  }

}
