import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './landing-page/account-info/account-info.component';
import { ShopDetailsComponent } from './landing-page/shop-details/shop-details.component';
import { LoginComponent } from './login/login.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

const routes: Routes = [
  {path: 'landing-page',component:SubmitButtonComponent},
  {path: 'home',component:LoginComponent},
  {path: 'account-info',component:AccountInfoComponent},
  {path: 'shop-details',component:ShopDetailsComponent},
  {path: '',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
