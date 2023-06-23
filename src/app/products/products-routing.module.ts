import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { TrackerpageComponent } from './trackerpage/trackerpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
const routes: Routes = [
  {
    path:"",
    component:ProductsComponent
  },
  // { path: 'tracker/:sizeId', component: TrackerComponent }
  {
    // path:'buyNow/:sizeId',
    path:'buyNow',
    component:TrackerpageComponent
  },
  {
    path:"buyNow/paymentPage",
    component:PaymentpageComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
