import { Component } from '@angular/core';
import { ProductpageService } from '../service/product/productpage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productId: any;
  // product: any;
  productdata: any = [];
  variants: any = [];
  productReview: any = [];

  reviewImage: any = [];
  // imageDescription
  imgDesc: any = [];
  variantIndex = 0;
  sizeIndex = 0;
  bulkPurchaseIndex = 0;
  extraImage = 1;

  // productReviewAnalysis
  reviewAnalysis: any = [];
  //screen time
  startTime!: Date;

  // basic information
  basicInfo: any = [];

  // skeleton Loader
  loader = true;
  mainiamge = true;

  // main to extra image
  selectedImageSrc: string | undefined;

  // quanity increasing and deincreasing
  count: number = 1;
  moq:number |undefined
  limite = false;
  sizeId :number =0

  // bulk purchase
  bulkPurchaseDetails: any = [];

  products: any = [];

  // BuyNow
  selectedSize: string | undefined;
  selectedQuantity: number | undefined

  constructor(
    private productPage: ProductpageService,
    private _ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.productId = this._ActivatedRoute;
  }
  productDetails: any = [];

  ngOnInit() {
    this.startTime = new Date();

    this.productId = this._ActivatedRoute.snapshot.paramMap.get('productId');

    this.productPage.getProductById(this.productId).subscribe(
      (res) => {
        // Handle the API response here
        this.loader = false;
        this.productdata = res.data;
        // console.log(res);
        this.variants = this.productdata.variants;

        this.selectedImageSrc =
          this.productdata.variants[this.variantIndex].extra_images[0];
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );

    // imageDescription API
    this.productPage.getProductimageDesbyProductId().subscribe(
      (res) => {
        // console.log(res);

        // Handle the API response here
        this.imgDesc = res.data;
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );

    this.productPage.productReviewSection().subscribe(
      (res) => {
        // Handle the API response here
        this.productReview = res.data;
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );

    this.productPage.productReviewAnalysis().subscribe((res) => {
      this.reviewAnalysis = res.data;
    });

    this.productPage.productBasicInfo().subscribe((res) => {
      this.basicInfo = res.data;
    });
    this.setquantiy();
  }
  ngAfterViewInit() {
    window.addEventListener('blur', () => {
      const endTime = new Date();
      const timeSpent = endTime.getTime() - this.startTime.getTime();
      // Here, you can send the timeSpent value to your server or perform any other desired action.
    });
  }

  // color: boolean = true;
  // colorsss: number = 1;
  // color

  selectColor(value: any) {
    this.variantIndex = value;
  }
  selectSizeIndex(value: number) {
    this.sizeIndex = value;
  }

  setImageSrc(i: number) {
    this.extraImage = i;
  }

  increase() {
    this.count++;
  }
  descrease() {
    this.count--;
  }

  
  setquantiy() {
    //  this.count = 5
    for (let i = this.variantIndex; i < this.variants.length; i++) {
      for (
        let j = this.sizeIndex;
        j < this.variants[this.variantIndex].size_variants.length;
        j++
      ) {
        if (
          this.variants[this.variantIndex].size_variants[this.sizeIndex].moq ==
          null
        ) {
          this.count = 1;
          // console.log('working yaha tak ');
        } else {
          
          this.count =
            this.variants[this.variantIndex].size_variants[this.sizeIndex].moq;
            this.moq = this.variants[this.variantIndex].size_variants[this.sizeIndex].moq;
        }
        this.sizeId  =this.variants[this.variantIndex].size_variants[this.sizeIndex].size_id
        break;
      }
      
      
    }
  }

  buyNow() {
    // Construct the route URL with the selected size ID and quantity
    // this.router.navigate(['/buyNow', this.sizeId, this.count]);
console.log('working');

    // const route = '/buyNow/' + this.selectedSize + '?quantity=' + this.count;

    // // Change the route to the tracker page
    // this.router.navigateByUrl(route);
  }
}
