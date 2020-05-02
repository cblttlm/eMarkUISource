import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {RouterService} from '../../services/router.service';
import {UserSearchHistory} from '../../model/userSearchHistory';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId: string;
  isBuyer = false;
  isSeller = false;
  isAdmin = false;
  searchContent;
  isLogin: boolean;
  constructor(private authService: AuthenticationService,
              private routerService: RouterService,
              private queryService: QueryService) {
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('token')){
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    this.userId = this.authService.getUserId();
     // tslint:disable-next-line:triple-equals
    if (this.userId == 'buyer') {
      this.isBuyer = true;
    }
    // tslint:disable-next-line:triple-equals
    else if (this.userId == 'seller') {
      this.isSeller = true;
    }
    else if(this.userId='admin'){
      this.isAdmin = true;
      this.routerService.routeToAdminBlockPage();
    }
    else {
    this.routerService.routeToSignin();
    }
  }
  ngDoCheck(): void {
    if (sessionStorage.getItem('token')){
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
  Search(searchContent: string) {
    this.queryService.setQuerySQL(searchContent);
    console.log(searchContent);
    this.routerService.routeToProduct();
  }
  logOut() {
    sessionStorage.removeItem('token');
    this.routerService.routeToLogin();
  }
}
