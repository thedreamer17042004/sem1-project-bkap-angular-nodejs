import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../services/api.service';



@Injectable()
export class DataService {

    public data = new BehaviorSubject<any>({
        cartQtt: 0
    });

    constructor(private cart: ApiService) {
        this.data.next({ cartQtt: this.cart.totaQtt });
    }


    saveChange(data: any) {
        this.data.next(data);
    }


}


