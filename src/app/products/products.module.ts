import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HighchartsChartModule } from 'highcharts-angular';
// components moudles
import { MainheaderModule } from '../mainheader/mainheader.module';
import { SubheaderModule } from '../subheader/subheader.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { TrackerpageComponent } from './trackerpage/trackerpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';


@NgModule({
  declarations: [
    ProductsComponent,
    TrackerpageComponent,
    PaymentpageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
     MatIconModule,
    MainheaderModule,
    SubheaderModule,
    NgxSkeletonLoaderModule,
    IvyCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
  ]
})
export class ProductsModule { }
