import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProducts } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  newProduct = {} as IProducts
  products: IProducts[] = []
  error!:string
  isError!:boolean
  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.products
  }
  addProduct(form: any) {
    if (!this.productsService.selection) {
      let productName = form.value.productName
       this.newProduct = {
        productName: productName
      }
      this.productsService.addProducts(this.newProduct)
      form.reset()
    } 
    else {
      this.newProduct = {
        productName: form
      }
      this.productsService.addProducts(this.newProduct)
    }
  }
}
