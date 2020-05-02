import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from './pages/cart/cart.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {AddProductComponent} from './pages/addproduct/addproduct.component';
import {PurchasehistoryComponent} from './pages/purchasehistory/purchasehistory.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {DisplayProductComponent} from './pages/displayproduct/displayproduct.component';
import {LogInComponent} from './pages/log-in/log-in.component';
import {AdminblockComponent} from './pages/admin/adminblock.component';
import {SigninGuard} from './guard/signin.guard';
const routes: Routes = [
  { path: 'Cart', component: CartComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'products', component: ProductComponent,canActivate: [SigninGuard]},
  { path: 'products/:productId', component: ProductDetailComponent},
  { path: 'add-product', component: AddProductComponent},
  { path:'purchasehistory',component:PurchasehistoryComponent},
  { path:'homepage',component: NavbarComponent},
  { path:'adminblock',component: AdminblockComponent},
  { path:'displayproduct',component: DisplayProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
