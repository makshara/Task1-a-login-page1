import { AccountDetailsComponent } from 'src/app/shared/account-details/account-details.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AccountInfoComponent } from './landing-page/account-info/account-info.component';
import { ShopDetailsComponent } from './landing-page/shop-details/shop-details.component';
import { NavHeaderComponent } from './shared/nav-header/nav-header.component';
import { CommonModule } from '@angular/common';
import { ResponseDetailsComponent } from './shared/response-details/response-details.component';
import { CamelcasePipe } from './shared/pipes/camelcase.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { HeaderInterceptorService } from './shared/interceptors/header-interceptor.service';
import { AccountSearchModule } from './modules/account-search/account-search.module';
import { AccountSearchRoutingModule } from './modules/account-search-routing.module';
import { CashService } from './services/cash.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SubmitButtonComponent,
    AccountInfoComponent,
    ShopDetailsComponent,
    NavHeaderComponent,
    ResponseDetailsComponent,
    CamelcasePipe,
    HighlightDirective,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AccountSearchModule,
    AccountSearchRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptorService,
      multi: true
     }, CashService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
