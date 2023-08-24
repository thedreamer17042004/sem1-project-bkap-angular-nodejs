import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



const _api = 'http://localhost:8888';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data:any=[];
  totalPrice: number = 0;
  totaQtt: number = 0;

  constructor(private http: HttpClient) { 
    this.getCart();
    this.getTotalPrice();
    this.totaQtt = this.getTotalQtt();
  }



  getAllProductFavorite(){
    return this.http.get(`${_api}/vege/productFa`);
  }
  getAllProduct(){
    return this.http.get(`${_api}/vege/product`);
  }
  getAllCategory() {
    return this.http.get(`${_api}/vege/category`);
  }
  getCategory(id:any) {
    return this.http.get(`${_api}/vege/category/${id}`);
  }
  getCountPro(id:any) {
    return this.http.get(`${_api}/vege/prod/${id}` )
  }
  producsearchname(name:any) {
    return this.http.get(`${_api}/vege/productsearch?name=${name}`)
  }

  sortPro(name:any, type:any) {
    return this.http.get(`${_api}/vege/sortpro?name=${name}&desc=${type}`)
  }

  checkLogin(data: any) {
    return this.http.post(`${_api}/vege/login`, data);
  }

  checkRegister(data:any) {
    return this.http.post(`${_api}/vege/register`, data);
  }
  addfavorite(data:any) {
    return this.http.post(`http://localhost:8888/vege/favorite`, data);
  }



  // cart function

  getProductById(id: number, data: any) {
    return data.find((item: any) => {
      return item.id == id;
    });
  };


  private getCart() {
    let dataloc = sessionStorage.getItem("cart");
    if (dataloc) this.data = JSON.parse(dataloc);
  }



  addTocart(data:any){
    let idex: any = this.checkCartExists(data.id);
    if(idex == -1) {
      let item: any = {
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.sale_price ? data.sale_price : data.price,
        amount: data.amount,
        total: (data.sale_price ? data.sale_price : data.price) * (data.amount)
      };
      this.data.push(item);
    }else {
        this.data[idex].amount += 1;
        this.data[idex].total = this.data[idex].amount * (data.sale_price ? data.sale_price : data.price)
        
    }
    this.saveCart(this.data);

    this.getTotalPrice();
    
    
  }


/**  addto cart */
addTocart2(data:any, amount:any){
  let idex: any = this.checkCartExists(data.id);
  if(idex == -1) {
    let item: any = {
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.sale_price ? data.sale_price : data.price,
      amount: amount,
      total: (data.sale_price ? data.sale_price : data.price) * (amount)
    };
    this.data.push(item);

  }else {
      this.data[idex].amount += amount;
      this.data[idex].total = this.data[idex].amount * (data.sale_price ? data.sale_price : data.price)
      
  }
  this.saveCart(this.data);

  this.getTotalPrice();
  
  
}

// end

  remove(idex: number) {
    this.data.splice(idex, 1);
    this.saveCart(this.data);
    this.getTotalPrice();
    
  }

  public getTotalQtt() {
    let t = 0;
    this.data.forEach((item: any) => {
        t += parseFloat(item.amount);
    });

    return t;
  }

  saveCart(carts: any) {
    let cartJson = JSON.stringify(carts);
    sessionStorage.setItem('cart', cartJson);
  }

  checkCartExists(id: number) {
    return this.data.findIndex((item: any) => {
      return item.id == id;
    })
  };


  update(idex: number, quantity: number) {
    this.data[idex].amount = quantity;
    this.data[idex].total = this.data[idex].amount * (this.data[idex].sale_price ? this.data[idex].sale_price : this.data[idex].price);
    this.saveCart(this.data);
    this.getTotalPrice();
  }

  private getTotalPrice() {
    let t = 0;
    this.data.forEach((item: any) => {
        t += parseFloat(item.amount) * parseFloat(item.price);
    });
    
    this.totalPrice = t;
  }






 
}
