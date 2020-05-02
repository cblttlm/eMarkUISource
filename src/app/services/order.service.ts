import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  items = [];
  constructor() {}

  addToOrderlist(product:[]) {
    for (let i = 0; i < product.length; i++) {
      this.items.push(product[i]);
    }
  }
  removeFromOrderList(product) {
    let index = this.items.findIndex(item => item.productId == product.productId);
    this.items.splice(index,1);
    return this.items;
  }

  getOrderList() {
    return this.items;
  }

  clearOrderList() {
    this.items = [];
    return this.items;
  }
}
