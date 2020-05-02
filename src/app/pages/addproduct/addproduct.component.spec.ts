import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AddProductComponent} from './addproduct.component';
import {products} from '../../model/products';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Product} from '../../model/product.model';
import {RouterService} from '../../services/router.service';
import {Injectable, NgModule} from '@angular/core';
import {NavbarComponent} from '../../component/navbar/navbar.component';


describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([  { path:'homepage',component: NavbarComponent},]),
      ],
      providers: [RouterService],
      declarations: [ AddProductComponent ],
    })
      .compileComponents();
  }));

  it('should be getProduct',() => {
    component.model.products = products;
    expect(component.getProduct(1).name).toBe("Phone XL");
  });
  it('should be getProducts',() => {
    component.model.products = products;
    expect(component.getProducts().length === 6);
  });

  it('should be addProduct',() => {
    let p:Product = new Product();
    component.addProduct(p);
    expect(component.model.products[0].productId === 100);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
