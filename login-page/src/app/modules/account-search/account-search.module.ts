import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { AccountDetailsModule } from 'src/app/shared/account-details/account-details.module';



@NgModule({
  declarations: [UserInfoComponent
   ],
   imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    AccountDetailsModule
  ],
  exports:[UserInfoComponent]
})
export class AccountSearchModule { }
