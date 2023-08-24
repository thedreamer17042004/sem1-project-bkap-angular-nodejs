import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import  { DataService } from 'src/app/services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { BodyHomeComponent } from './components/body-home/body-home.component';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { BenefitBlogHomeComponent } from './components/benefit-blog-home/benefit-blog-home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutBodyComponent } from './components/about-body/about-body.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutFarmerComponent } from './components/about-farmer/about-farmer.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BodyHomeComponent,
    ProductHomeComponent,
    BenefitBlogHomeComponent,
    BrandsComponent,
    FooterComponent,
    AboutBodyComponent,
    HomeComponent,
    AboutComponent,
    AboutFarmerComponent,
    BloglistComponent,
    BlogComponent,
    BlogDetailComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    ShopDetailComponent,
    EmptyCartComponent,
    WishslitComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
