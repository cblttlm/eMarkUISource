import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }
  removeFromCart(product) {
    let index = this.items.findIndex(item => item.productId == product.productId);
   // let index = this.items.indexOf(product);
    this.items.splice(index,1);
    return this.items;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
