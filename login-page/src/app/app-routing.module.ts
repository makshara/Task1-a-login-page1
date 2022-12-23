import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

const routes: Routes = [
  {path: 'home/submitpage',component:SubmitButtonComponent},
  {path: 'home',component:LoginComponent},
  {path: '',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
