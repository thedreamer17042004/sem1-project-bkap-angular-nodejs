import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishslit',
  templateUrl: './wishslit.component.html',
  styleUrls: ['./wishslit.component.css']
})
export class WishslitComponent implements OnInit {
  data:any;

  constructor() { }

  ngOnInit(): void {
    this.getdat();
  }

  getdat() {
    let a = sessionStorage.getItem('favorite');
    if(a) this.data = JSON.parse(a);
  }



}
