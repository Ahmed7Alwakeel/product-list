import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
products:IProducts[]=[]
search:string=""
adding:string="Add New Product"
selection!:boolean

  constructor(
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.selection=this.productsService.selection
    this.products=this.productsService.products
  }
  searchProducts(){
    if(this.search==""){
      this.ngOnInit()
    }else{
      this.products=this.products.filter(product=>{
       return product.productName.toLocaleLowerCase().match(this.search.toLocaleLowerCase())
      })
    }
  }
  changeStatus(){
   
    this.productsService.selection=!this.productsService.selection
    this.selection=!this.selection
    this.adding=this.selection?"Add New Product":"Select Product"
    
  }
}
