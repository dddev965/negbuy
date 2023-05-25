import { Component } from '@angular/core';
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss']
})
export class SubheaderComponent {
  getData:any=[]

  constructor() {

    // this.myservice.getdata().subscribe((res)=>{
    //   console.log(res);
    //   this.getData=res;}
    // );
  }

  ngOnInit() {
  //  this.myservice.getdata().subscribe(res=>this.getData=res)
  //   console.log(this.getData);
    
 }
  

  babyHover: boolean = false;
  Petcare: boolean = false;
  Electronic: boolean = false;
  Mechanical: boolean = false;
  Fabric: boolean = false;
  automibile: boolean = false;
  gems: boolean = false;
  healthcare: boolean = false;
  allCate: boolean = false;

  baby() {
    this.babyHover = !this.babyHover;
  }
  petcare() {
    this.Petcare = !this.Petcare;
  }

  ElectronicHover() {
    this.Electronic = !this.Electronic;
  }

  MechanicalHover() {
    this.Mechanical = !this.Mechanical;
  }
  FabricHover() {
    this.Fabric = !this.Fabric;
  }
  gemsHover() {
    this.gems = !this.gems;
  }
  healthcareHover() {
    this.healthcare = !this.healthcare;
  }
  automibileHover() {
    this.automibile = !this.automibile;
  }
  allCateHover() {
    this.allCate = !this.allCate;
  }

  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
}
