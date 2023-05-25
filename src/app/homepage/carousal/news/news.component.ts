import { Component } from '@angular/core';
import {HomeService} from "../../../service/home.service"
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  getData:any=[];

  interval:any=[4000,8000,1200];

  imgurl='../../assets/Carousel/4 Poster-01.jpg';
  constructor(private myservice : HomeService) {
    this.myservice.getdata().subscribe((res)=>{
      // console.log(res);
    this.getData = res
    // console.log(this.getData);
    });
    }
}
