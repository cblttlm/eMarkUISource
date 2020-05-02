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
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  timer;
  alerts: Alert[];
  token: any;
  user: UserLogin;
  errorMessage: string;

  // @ts-ignore
  constructor(private authService: AuthenticationService, private routerService: RouterService) {
    this.user = new UserLogin();
  }
  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    this.user = loginForm.value;
    // userId = this.user.userId;
    this.authService.setUserId(this.user.userId);
    this.routerService.routeToHomePage();
  }

  validInput(value: any): boolean {
    this.reset();
    if (!value.name) {
      this.alerts.push({type : 'danger', message: 'username required!'});
      return false;
    }

    if (!value.password) {
      this.alerts.push({type : 'danger', message: 'password required!'});
      return false;
    }

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
