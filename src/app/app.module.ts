import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeService} from "./service/home.service"
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { MainheaderModule } from './mainheader/mainheader.module';
import { SubheaderModule } from './subheader/subheader.module';

import { ReactiveFormsModule } from '@angular/forms';


// module components
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FooterModule,
    MainheaderModule,
    SubheaderModule,
    ReactiveFormsModule
    
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
