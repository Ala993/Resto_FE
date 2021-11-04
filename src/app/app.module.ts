import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home-components/banner/banner.component';
import { AboutComponent } from './components/home-components/about/about.component';
import { BlogComponent } from './components/home-components/blog/blog.component';
import { ExclusiveComponent } from './components/home-components/exclusive/exclusive.component';
import { ReservationComponent } from './components/home-components/reservation/reservation.component';
import { ReviewComponent } from './components/home-components/review/review.component';
import { VideosComponent } from './components/home-components/videos/videos.component';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AddChefComponent } from './components/admin/add-chef/add-chef.component';
import { AddDishComponent } from './components/admin/add-dish/add-dish.component';
import { DisplayChefsComponent } from './components/admin/display-chefs/display-chefs.component';
import { DisplayDishesComponent } from './components/admin/display-dishes/display-dishes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChefsComponent } from './components/chefs/chefs.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
    BlogComponent,
    ExclusiveComponent,
    ReservationComponent,
    ReviewComponent,
    VideosComponent,
    AdminComponent,
    AddChefComponent,
    AddDishComponent,
    DisplayChefsComponent,
    DisplayDishesComponent,
    ChefsComponent,
    MenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
