import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishslit',
  templateUrl: './wishslit.component.html',
  styleUrls: ['./wishslit.component.css']
})
export class WishslitComponent implements OnInit {
  data:any;
  li:any;
  lis:any;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getdat();

  }
  getdat() {
    let a = sessionStorage.getItem('favorite');
    if(a) this.data = JSON.parse(a);
  }


  removeItem(id:any, idproduct:any){
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
        this.apiService.deletFavorite(idproduct).subscribe((res:any) => {
        });
        this.removeFavorie(this.data, id);
      }else {
        return false;
      }
    })
  }

  removeFavorie(data:any, idx:number) {
    data.splice(idx, 1);
    this.setdata(data)
  }
  
  setdata(data:any) {
    let json = JSON.stringify(data);
    sessionStorage.setItem('favorite', json)
  }
}
