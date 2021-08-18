import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path:'slider',component: SliderComponent},
  { path:'footer',component: FooterComponent},
  { path:'navbar',component: NavbarComponent},
  { path:'home',component: HomeComponent},
  { path:'customer',component: CustomerComponent},
  { path:'about',component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






