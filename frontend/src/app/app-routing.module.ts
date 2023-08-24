import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { WishslitComponent } from './pages/wishslit/wishslit.component';
import { ShopComponent } from './pages/shop/shop.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "blogList", component: BlogComponent},
  {path: "blog-detail", component: BlogDetailComponent},
  {path: "contact", component: ContactComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "cart", component: CartComponent},
  {path: "shop-detail/:id", component: ShopDetailComponent},
  {path: "empty-cart", component: EmptyCartComponent},
  {path: "wish-slit", component: WishslitComponent},
  {path: "shop", component: ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
