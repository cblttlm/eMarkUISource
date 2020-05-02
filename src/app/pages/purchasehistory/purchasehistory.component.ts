import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-purchasehistory',
  templateUrl: './purchasehistory.component.html',
  styleUrls: ['./purchasehistory.component.css']
})
export class PurchasehistoryComponent implements OnInit {
  productOrders : Product[];
  constructor(private orderService:OrderService) {
  }
  ngOnInit(): void {
    this.productOrders = this.orderService.getOrderList();
    console.log(this.productOrders);
  }

}
