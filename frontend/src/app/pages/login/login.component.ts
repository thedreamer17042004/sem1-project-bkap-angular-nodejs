import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private router: Router,private api: ApiService,private toastr: ToastrService,private notifyService:CommonService ) { }

  ngOnInit(): void {
  }


  get f() { return this.fLogin.controls; }
  onSubmit() {
    if (this.fLogin.invalid) {return;}
    this.api.checkLogin(this.fLogin.value).subscribe((res: any) => {
      console.log()
      if(res.message == 'Admin OK') {
        Swal.fire({
          position: 'top-start',
          icon: 'success',
          title: 'Admin verified',
          showConfirmButton: false,
          timer: 1000
        });
        this.router.navigate(['/'])


      } else if(res.result) {
        console.log(res.result)
        let jsonData = JSON.stringify(res.result);
        sessionStorage.setItem('login', jsonData);
        this.notifyService.showSuccessWithTimeout("Logined successfully", "Notification", 1500);
        location.assign('/');
      }else {
          this.notifyService.showfalse("Email or password is not correct", "Notification", 1000);
      }
      
      
     
    })
  }

}
