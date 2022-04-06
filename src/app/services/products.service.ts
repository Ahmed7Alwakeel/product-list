import { Injectable } from '@angular/core';
import { IProducts } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products:IProducts[]=[
  {
    productName:"product 1"
  },{
    productName:"product 2"
  },{
    productName:"product 3"
  }
]
selection:boolean=true
  constructor() { }
  addProducts(newProduct:IProducts){
    this.products.push(newProduct)
  }
}
