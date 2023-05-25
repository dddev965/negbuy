import { Component } from '@angular/core';
import {HomeService} from "../../service/home.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-animalslider',
  templateUrl: './animalslider.component.html',
  styleUrls: ['./animalslider.component.scss']
})
export class AnimalsliderComponent {
  getSlider:any=[];
  // productid:any=this.getSlider.data.product_id;
  constructor(private myservice: HomeService, private router:Router) {}

  ngOnInit() {
    this.myservice.sendPostRequest().subscribe((res) => {
      // console.log(res.data[].product_id);
this.getSlider= res;
// console.log(this.getSlider.data[1].product_id);

// console.log(this.productid);

     
    });
  }


  // goToProductPage(){
  //   window.open("/product", "_blank")

  //   // console.log(product_id);
    
  // }
  goToProduct(productId: number) {
    // this.router.navigate(['/product', productId]);
    // window.open("/product", "_blank")
    window.open(`/product/${productId}`, '_blank');
    // console.log(productId);
    
  }
  
}
