import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /// string interpolition
  productID:number=1;
  stockStats:string='Yes';

  getStockStats(){

    return this.stockStats;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
