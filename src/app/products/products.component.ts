import { Component } from "@angular/core";

@Component({

    selector:'products', //<products></products>
    templateUrl:'./products.component.html'
})

export class ProductsComponent{

  ///button- property binding
  addProduct=true;
  addProductStatus='No Product Added!';
  enteredVal='Product 1';

  constructor(){
      
    setTimeout(()=> {

        this.addProduct=false
    },4000)
  }

  onClick(){

    this.addProductStatus= this.enteredVal +' Added! is';
  }

  onUpdateProductName(event:any){

    console.log(event);
    this.enteredVal=(<HTMLInputElement>event.target).value;

  }
}