import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RouterService} from '../../services/router.service';
import {NgForm} from '@angular/forms';
import {products} from '../../model/products';
import {ProductService} from '../../services/product.service';
import {Model} from "../../model/repository.model";
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent {
  model;
  constructor(private productService:ProductService, private routerService: RouterService) {
    this.model = this.productService.model;
  }
   getProduct( key:number ):Product {
    return this.model.getProduct(key);
  }
  getProducts():Product[] {
    return this.model.getProducts();
  }
  newProduct : Product = new Product();

  addProduct(p:Product) {
    window.alert('Your product has been added to the product list!');
    this.model.saveProduct(p);
    this.routerService.routeToHomePage();
  }
}
