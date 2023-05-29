import { Component } from '@angular/core';
import { ProductpageService } from '../service/product/productpage.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productId: any;
  // product: any;
  productdata: any = [];
  variants: any = [];
  productReview: any = [];

  reviewImage: any = []
  // imageDescription
  imgDesc: any;

  medium: boolean = false;
  small: boolean = false;
  large: boolean = false;
  eLarger: boolean = false;

  carouselOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
  };

  products: any = [];

  constructor(
    private productPage: ProductpageService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.productId = this._ActivatedRoute;
  }
  productDetails: any = [];

  ngOnInit() {
    this.productId = this._ActivatedRoute.snapshot.paramMap.get('productId');
    console.log(this.productId);

    this.productPage.getProductById(this.productId).subscribe(
      (res) => {
        // Handle the API response here
        this.productdata = res.data;
        console.log(res);

        this.variants = this.productdata.variants;
        // console.log("yaha se aa rha h",this.variants);
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );

    // imageDescription API
    this.productPage.getProductimageDesbyProductId(this.productId).subscribe(
      (res) => {
        // Handle the API response here
        this.imgDesc = res.data;
        // console.log(this.imgDesc, 'getproductimagedes');

        // this.variants = this.productdata.variants;
        // console.log("yaha se aa rha h",this.variants);
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );


    this.productPage.productReviewSection().subscribe(
      (res) => {
        // Handle the API response here
        console.log(res, 'reviewSection');
        this.productReview = res.data;
        console.log(this.productReview)
        //  console.log(this.reviewImage );


//         for (let index = 0; index < this.productReview.length; index++) {
//   console.log(this.productReview[index].files);
//   this.reviewImage.push( this.productReview[index].files) 
//   // this.reviewImage = this.productReview[index].files

//   console.log(this.reviewImage);
  
  
// }
      



// for (let i = 0; i <= this.productReview.length; i++) {

//   for (let j = 0; j < this.productReview[i].files.length; j++) {
//   if(this.productReview[i].files.length == 0){
//     console.log('if part');
    
//   }else{
//     console.log(this.productReview[i].files[j]);
//   //  this.reviewImage =this.productReview[i].files[j]
//    this.reviewImage.push(this.productReview[i].files[j]) 

//   }
  
// }
//      }
    },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );
  }

  // getProductDetails() {
  //   console.log(this.productId);

  //   this.myservice.getProductById(this.productId).subscribe(
  //     (response) => {
  //       // Handle the API response here
  //       console.log(response);
  //     },
  //     (error) => {
  //       // Handle the API error here
  //       console.error(error);
  //     }
  //   );
  // }

  selectSize(size: any) {
    if (size === 'medium') {
      this.medium = true;
      this.small = false;
      // this.large-false;
    } else if (size === 'small') {
      this.small = true;
      this.medium = false;
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
