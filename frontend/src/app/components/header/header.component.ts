import { Component, OnInit , AfterViewInit, ViewChild, ElementRef, HostListener} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import  { DataService } from 'src/app/services/data.service'
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedOut:any;
  loggedOutx:any;
  valuename:any;
  name:any;
  sticky:boolean = false;
  totalQtt: number = 0;
  constructor(private dataSrv: DataService) { }
  

  ngOnInit(): void {
    this.dataSrv.data.subscribe((res: any) => {
      this.totalQtt = res.cartQtt;
    });
  
    this.fn();
    this.callAccount();
  }



  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset;
    if(windowScroll >= 350){
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  fn() {
    let a = document.querySelectorAll('.a-menu-a');

    a.forEach(element => {
        element.addEventListener('click', (e) => {
            var hasClass = (e.target as HTMLElement).classList.contains('a-menu-active');
            a.forEach(element => {
                if(element.classList.contains('a-menu-active')) {
                    element.classList.remove('a-menu-active')
                }
            });
             if(!hasClass) {
                element.classList.add('a-menu-active');
            }
        });
        
    });
  }
  
  callAccount() {
    let value = sessionStorage.getItem('login');
    if(!value) {
      value = null
    }else {
      this.name = JSON.parse(value);
      this.name.forEach(element => {
        this.valuename = element.name
      });

    }
  }

  logout() {
    sessionStorage.removeItem('login');
    location.assign('/login');
  }


}
