import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashService {
 // userName = '';
 constructor(){
  this.userName = new BehaviorSubject('');

 }
  userName : BehaviorSubject<string>;
  getUserName() :Observable<string> {
          return this.userName.asObservable();
      }
  setUserName(v:string) {
          this.userName.next(v);
      }
}
