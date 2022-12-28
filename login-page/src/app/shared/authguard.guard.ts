import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private router: Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {  
     return this.getUrl();
  }

  getUrl(){
    console.log(this.router.url);
    if(this.router.url == '/home'){
      return true;
    }
      return false
      ;
  }
  // create a method to get the current url , 
  //if the current url = "landing-page", then return true else false;
  
}
