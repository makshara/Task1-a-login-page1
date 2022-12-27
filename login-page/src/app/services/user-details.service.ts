import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';  

  constructor( private http: HttpClient) { 
  }
  /** GET heroes from the server */
getUsers(): Observable<any> {
  return this.http.get<any>(this.userUrl)
}
}
