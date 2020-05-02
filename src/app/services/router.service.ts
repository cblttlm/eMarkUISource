import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToSignin() {
    this.router.navigate(['/sign-in']);
  }

  routeToLogin() {
    this.router.navigate(['/log-in']);
  }

  // router for admin
  routeToProduct() {
    this.router.navigate(['/products']);
  }
  // router for admin
  routeToHomePage() {
    this.router.navigate(['/homepage']);
  }
  // router for admin
  routeToAdminBlockPage() {
    this.router.navigate(['/adminblock']);
  }
  routeBack() {
    this.location.back();
  }


}
