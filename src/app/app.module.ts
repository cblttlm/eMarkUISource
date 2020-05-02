import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { MoneyPipe } from './pipe/money.pipe';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {CartComponent} from './pages/cart/cart.component';
import {MessagesComponent} from './messages/messages.component';
import {AddProductComponent} from './pages/addproduct/addproduct.component';
import {DisplayProductComponent} from './pages/displayproduct/displayproduct.component';
import {PurchasehistoryComponent} from './pages/purchasehistory/purchasehistory.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {AdminblockComponent} from './pages/admin/adminblock.component';
import {PaAttrDirective} from './attr.directive';
import {JwtInterceptor} from './interceptor/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    ProductComponent,
    ProductDetailComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    LogInComponent,
    MoneyPipe,
    ProductAlertsComponent,
    CartComponent,
    AddProductComponent,
    DisplayProductComponent,
    PurchasehistoryComponent,
    AdminblockComponent,
    PaAttrDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
