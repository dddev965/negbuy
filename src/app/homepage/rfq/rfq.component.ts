import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-rfq',
  templateUrl: './rfq.component.html',
  styleUrls: ['./rfq.component.scss']
})
export class RfqComponent {
  
  formdata: any | undefined;
  userRequirment: String | undefined;
  deliveryDate: number | undefined;
  quanitity: number | undefined;
  targetPrice: number | undefined;
  ngOnInit() {
    this.formdata = new FormGroup({
      userRequirment: new FormControl(),
      deliveryDate: new FormControl(),
      quanitity: new FormControl(),
      targetPrice: new FormControl(),
    });
  }
  onClickSubmit(data: any) {
    this.userRequirment = data.userRequirment;
    console.log(data);
    
  }
}

