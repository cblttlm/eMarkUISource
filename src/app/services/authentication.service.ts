import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterService } from './router.service';
import { environment } from '../../environments/environment';
import { UserLogin } from '../model/userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setToken(token) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  setUserId(userId) {
    sessionStorage.setItem('userId', userId);
  }

  getUserId() {
    return sessionStorage.getItem('userId');
  }

  setAdmin(isAdmin) {
    sessionStorage.setItem('isAdmin', isAdmin);
  }

  getAdmin() {
    return sessionStorage.getItem('isAdmin');
  }

  // logout() {
  //   sessionStorage.removeItem('userId');
  //   sessionStorage.removeItem('token');
  //   this.routerService.routeToLogin();
  // }
  //
  // adminLogout() {
  //   sessionStorage.removeItem('userId');
  //   sessionStorage.removeItem('token');
  //   this.routerService.routeToAdminLogin();
  // }
}
