import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PhonedetailComponent } from './phonedetail/phonedetail.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: 'dmm', component: MoviesComponent },
  { path: 'test', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'shop/:id', component: PhonedetailComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: MyprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
