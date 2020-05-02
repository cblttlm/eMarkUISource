import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {UserLogin} from '../../model/userLogin';
import {RouterService} from '../../services/router.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [];

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  timer;
  alerts: Alert[];
  token: any;
  user: UserLogin;
  errorMessage: string;

  // @ts-ignore
  constructor(private authService: AuthenticationService,private routerService: RouterService) {
    this.reset();
    this.user = new UserLogin();
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.routerService.routeToProduct();
    }
  }

  onSubmit(loginForm: NgForm) {
    this.user = loginForm.value;
    if (this.validInput(this.user)) {
      this.authService.setUserId(this.user.userId);
      sessionStorage.setItem('token', this.user.userId);
      this.routerService.routeToHomePage();
    }
  }
  validInput(value: any): boolean {
    this.reset();
    if (value.password.length < 6) {
      this.alerts.push({type : 'danger', message: 'password length must be greater than 6!'});
      return false;
    }
    return true;
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
