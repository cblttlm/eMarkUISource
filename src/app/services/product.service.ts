import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Model} from '../model/repository.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  model: Model;

  constructor() {
    this.model = new Model();
  }
}





