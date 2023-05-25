import { Component } from '@angular/core';
import {HomeService} from "../../service/home.service"
@Component({
  selector: 'app-hardware-slider',
  templateUrl: './hardware-slider.component.html',
  styleUrls: ['./hardware-slider.component.scss']
})
export class HardwareSliderComponent {
  getSlider:any=[];
  constructor(private myservice: HomeService) {
    this.myservice.goToProductPage.apply
  }

  ngOnInit() {
    this.myservice.sendPostRequest().subscribe((res) => {
      console.log(res);
this.getSlider= res;
      // console.log(this.getData);
    });
  }
  goToProduct(){
    this.myservice.goToProductPage()
  }

}
