import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private toastr: ToastrService) { }

  showSuccessWithTimeout(message:any, title:any, timespan:any){

    this.toastr.success(message, title ,{
    
    timeOut :  timespan
    
    })
    
    }
  showfalse(message:any, title:any, timespan:any){

    this.toastr.error(message, title ,{
    
    timeOut :  timespan
    
    })
    
    }
}
