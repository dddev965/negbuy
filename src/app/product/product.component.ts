import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productId: any
  // product: any;
  productdata:any=[];
video:any='';
  
  medium:boolean=false;
  small:boolean=false;
  large:boolean=false;
  eLarger:boolean=false;
 
  carouselOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
  };

  products:any=[]

  constructor(
    private myservice: HomeService,
    private _ActivatedRoute: ActivatedRoute,
    
    ) {
this.productId=this._ActivatedRoute

    }
  productDetails: any = [];
  

  ngOnInit() {

this.productId= this._ActivatedRoute.snapshot.paramMap.get("productId");
console.log(this.productId);


this.myservice.getProductById(this.productId).
subscribe((res) => {
    // Handle the API response here
    this.productdata=res.data
console.log(res);

this.video=this.productdata.video;
console.log(this.video);

  },
  (error) => {
    // Handle the API error here
    console.error(error);
  }
);

  }


  getProductDetails() {
    console.log(this.productId);
    
    this.myservice.getProductById(this.productId).subscribe(
      (response) => {
        // Handle the API response here
        console.log(response);
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );
  }


  selectSize(size:any){
 if(size==="medium"){
  this.medium=true;
  this.small=false;
  // this.large-false;
 }  else if (size==='small'){
  this.small = true;
  this.medium=false;

 }
  }

  src = 'assets/Images/product.png';
  myFunction(imgs: any) {
    this.src = imgs;
    console.log(imgs);
  }

  slides = [
    { img: 'http://placehold.it/350x150/000000' },
    { img: 'http://placehold.it/350x150/111111' },
    { img: 'http://placehold.it/350x150/333333' },
    { img: 'http://placehold.it/350x150/666666' },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    showArrow: false,
  };

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized', e);
  }

  breakpoint(e: any) {
    console.log('breakpoint', e);
  }

  afterChange(e: any) {
    console.log('afterChange', e);
  }

  beforeChange(e: any) {
    console.log('beforeChange', e);
  }
}
