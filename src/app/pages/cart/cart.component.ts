import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {CartService} from '../../services/cart.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private cartService:CartService, private formBuilder:FormBuilder,private orderService:OrderService) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }

    ngOnInit() {
      this.items = this.cartService.getItems();
    }
  removeFromCart(product) {
    window.alert('Your product has been delete from the cart!');
    this.items = this.cartService.removeFromCart(product);
    this.checkoutForm.reset();
  }
    onSubmit(customerData) {
      // Process checkout data here
      this.orderService.addToOrderlist(this.items);
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
    }
  }
