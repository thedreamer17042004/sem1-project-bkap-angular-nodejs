import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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
    this.apiService.deletFavorite(idproduct).subscribe((res:any) => {
      console.log(res)
    });
   this.removeFavorie(this.data, id);
   
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
