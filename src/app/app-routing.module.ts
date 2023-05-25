import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", loadChildren:() => import("./homepage/homepage.module").then(m=> m.HomepageModule)
  },



  {
    path:"product/:productId",
    loadChildren:() => import("./product/product.module").then(m=> m.ProductModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
