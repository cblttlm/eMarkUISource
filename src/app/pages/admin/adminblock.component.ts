import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
  selector: 'app-adminblock',
  templateUrl: 'adminblock.component.html',
  styleUrls: ['adminblock.component.css']
})
export class AdminblockComponent implements OnInit {
  btnDisplayName;
  constructor() {
    }

    ngOnInit() {
    this.btnDisplayName = "block";
    }

  onClick() {
    if (this.btnDisplayName == "block")
    {
      this.btnDisplayName = "unblock";
    }else{
      this.btnDisplayName = "block";
    }
  }
}
