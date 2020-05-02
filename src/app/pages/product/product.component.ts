import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterService} from '../../services/router.service';
import {UserSearchHistory} from '../../model/userSearchHistory';
import { products } from '../../model/products';
import { products2 } from '../../model/products';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  userSeatchHistory;
  manufacturer;
  constructor(private authService: AuthenticationService,
              private routerService: RouterService,
              private queryService: QueryService) {
  }
  products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit(): void {
   // this.products = products;
    // tslint:disable-next-line:triple-equals
    console.log(this.queryService.getQuerySQL());
    if ( this.queryService.getQuerySQL() == 'iphone' ) {
      this.products = products;
      // tslint:disable-next-line:triple-equals
    } else if ( this.queryService.getQuerySQL() == 'xiaomi' ){
      this.products = products2;
    }
  }
  filter() {
    if ( this.manufacturer == 'iphone' ) {
      this.products = products;
      // tslint:disable-next-line:triple-equals
    } else if ( this.manufacturer == 'xiaomi' ){
      this.products = products2;
    }
  }
}
