import { Component } from '@angular/core';
import {NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'eMartUI';
  private router: any;
  login() {
    this.router.navigate(['/login', { id: 'login'}]);
  }
}
