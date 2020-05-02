import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {CartService} from '../../services/cart.service';
import {Model} from "../../model/repository.model"
import {Product} from '../../model/product.model';
import {ProductService} from '../../services/product.service';
@Component({
  selector: 'app-displayproduct',
  templateUrl: 'displayproduct.component.html',
  styleUrls: ['displayproduct.component.css']
})
export class DisplayProductComponent implements OnInit{
    products : Product[];
    constructor(private productService:ProductService) {
      this.products = this.productService.model.getProducts();
    }
    ngOnInit() {

    }
  }
