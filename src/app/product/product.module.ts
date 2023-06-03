import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { MatIconModule } from '@angular/material/icon';
// components moudles
import { MainheaderModule } from '../mainheader/mainheader.module';
import { SubheaderModule } from '../subheader/subheader.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatIconModule,
    MainheaderModule,
    SubheaderModule,
    NgxSkeletonLoaderModule,
    IvyCarouselModule
  ]
})
export class ProductModule { }
