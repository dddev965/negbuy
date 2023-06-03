import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvyCarouselModule } from "angular-responsive-carousel";
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { AnimalsliderComponent } from './animalslider/animalslider.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubcatoryComponent } from './subcatory/subcatory.component';
import { SubheaderModule } from '../subheader/subheader.module';
import { NewsComponent } from './carousal/news/news.component';
import { BannerComponent } from './carousal/banner/banner.component';
import { OfficeSuppliesComponent } from './office-supplies/office-supplies.component';
import { VehiclePartComponent } from './vehicle-part/vehicle-part.component';
import { ElectroniEquipmentComponent } from './electroni-equipment/electroni-equipment.component';
import { ApparelAccessoriesComponent } from './apparel-accessories/apparel-accessories.component';
import { SportGoodComponent } from './sport-good/sport-good.component';
import { HardwareComponent } from './hardware/hardware.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { CameraOpticComponent } from './camera-optic/camera-optic.component';
import { HomeGardensComponent } from './home-gardens/home-gardens.component';
import { HealthBeatuyComponent } from './health-beatuy/health-beatuy.component';
import { HardwareSliderComponent } from './hardware-slider/hardware-slider.component';
import { RfqComponent } from './rfq/rfq.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    HomepageComponent,
    AnimalsliderComponent,
    HeaderComponent,
    DashboardComponent,
    SubcatoryComponent,
    NewsComponent,
    BannerComponent,
    OfficeSuppliesComponent,
    VehiclePartComponent,
    ElectroniEquipmentComponent,
    ApparelAccessoriesComponent,
    SportGoodComponent,
    HardwareComponent,
    OurserviceComponent,
    FurnitureComponent,
    CameraOpticComponent,
    HomeGardensComponent,
    HealthBeatuyComponent,
    HardwareSliderComponent,
    RfqComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    IvyCarouselModule,
    SubheaderModule,
    NgxSkeletonLoaderModule
  ]
})
export class HomepageModule { }
