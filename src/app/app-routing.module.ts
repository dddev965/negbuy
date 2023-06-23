import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", loadChildren:() => import("./homepage/homepage.module").then(m=> m.HomepageModule)
  },



  {
    path:"products/:productId",
    // loadChildren:() => import("./product/product.module").then(m=> m.ProductModule)
    loadChildren:() => import("./products/products.module").then(m=> m.ProductsModule)
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
