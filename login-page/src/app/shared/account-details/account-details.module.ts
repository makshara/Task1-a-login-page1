import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsComponent } from 'src/app/shared/account-details/account-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AccountDetailsComponent,
    
   ],
   imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports:[
    AccountDetailsComponent
  ]
})
export class AccountDetailsModule { }
