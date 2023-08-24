import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fSignin: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private router: Router,private api: ApiService,private toastr: ToastrService,private notifyService:CommonService) { }

  ngOnInit(): void {
  }


  get f() { return this.fSignin.controls; }
  onSubmit() {
    if (this.fSignin.invalid) {return;}


    this.api.checkRegister(this.fSignin.value).subscribe((res: any) => {
     
      if(res) {
        this.notifyService.showSuccessWithTimeout("Registered successfully", "Notification", 1000);
        this.router.navigate(['/login'])
      }else {
        this.notifyService.showfalse("Registered failed", "Notification", 1000);
      }
     
    })
  }


}
