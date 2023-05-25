import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainheaderRoutingModule } from './mainheader-routing.module';
import { MainheaderComponent } from './mainheader.component';


@NgModule({
  declarations: [
    MainheaderComponent
  ],
  imports: [
    CommonModule,
    MainheaderRoutingModule
  ],
  exports:[
    MainheaderComponent
  ]
})
export class MainheaderModule { }
