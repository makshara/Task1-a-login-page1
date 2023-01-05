import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './account-search/components/user-info/user-info.component';
const routes: Routes = [
  {path: 'user-info',component:UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountSearchRoutingModule { }
