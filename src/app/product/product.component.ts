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

  main_variant = true;

  variantIndex = 0;
  sizeIndex= 0;
  bulkPurchaseIndex =0

  reviewImage: any = [];
  // imageDescription
  imgDesc: any = [];

  // prize
  myindex: number = 0;
  // selectedColor!: string;
  productsize: number = 0;

  // sizeColorIndex: any = 0;
  // sizeIndex: any = 0;

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
  count: number = 60;
  limite = false;

  // images: { src: string }[];
 

  products: any = [];

  selectedColor: number = 0;
  selectedSize: number = 0;

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
    // console.log(this.productId);

    this.productPage.getProductById(this.productId).subscribe(
      (res) => {
        // Handle the API response here
        this.loader = false;
        this.productdata = res.data;
        console.log(res);
        // this.images = res.data.variants.extra_images
        this.variants = this.productdata.variants;
        // console.log("yaha se aa rha h",this.variants);
        console.log(this.selectedImageSrc);
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
        console.log(res);

        // Handle the API response here
        this.imgDesc = res.data;
        // console.log(this.imgDesc, 'getproductimagedes');
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );

    this.productPage.productReviewSection().subscribe(
      (res) => {
        // Handle the API response here
        // console.log(res, 'reviewSection');
        this.productReview = res.data;
        // console.log(this.productReview)
      },
      (error) => {
        // Handle the API error here
        console.error(error);
      }
    );

    this.productPage.productReviewAnalysis().subscribe((res) => {
      // console.log(res);

      this.reviewAnalysis = res.data;
      console.log(this.reviewAnalysis);
    });

    this.productPage.productBasicInfo().subscribe((res) => {
      // console.log(res.data);
      this.basicInfo = res.data;
    });
  }
  ngAfterViewInit() {
    window.addEventListener('blur', () => {
      const endTime = new Date();
      const timeSpent = endTime.getTime() - this.startTime.getTime();
      // Here, you can send the timeSpent value to your server or perform any other desired action.

      console.log(timeSpent);
    });
  }

  setImageSrc(event: MouseEvent){
    const clickedImage = event.target as HTMLImageElement;
    this.selectedImageSrc = clickedImage.src;
    console.log(this.selectedImageSrc);
  }
  // selectSize(value: any) {
  //   console.log(value);
  //   for (let i = 0; i <= this.variants.length; i++) {
  //     if (this.variants[i].color == this.selectedColor) {
  //       for (let j = 0; j < this.variants[i].size_variants.length; j++) {
  //         console.log(this.variants[i].size_variants[j]);
  //         if (value == this.variants[i].size_variants[j].size) {
  //           console.log(this.variants[i].size_variants[j].size_id);
  //           this.sizeColorIndex = i;
  //           this.sizeIndex = j
  //           break;
  //         }
  //       }
  //     }
  //   }
  // }

  // selectionItem(){
  //    for (let i = 0; i < this.variants.length; i++) {
  //     for (let j = 0; j < this.variants[i].size_variants.length; j++) {
  //     for (let k = 0; k < this.variants[i].size_variants[j].bulk_purchase_details.length.length; k++) {
  //      this. variantIndex = i;
  //      this. sizeIndex= j;
  //     this.  bulkPurchaseIndex =j;
  //     }
        
  //     };
      
  //    }
  // }
  selectColor(value:any){
this.variantIndex =value

  }
  selectSizeIndex(value:number){
    this.sizeIndex = value
  }
  
  increase() {
    this.count++;
  }
  descrease() {
    this.count--;
    //     if(this.count == 60){
    // // this.limite=true
    //     }
  }
}
