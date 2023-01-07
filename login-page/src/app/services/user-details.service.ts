import { environment } from './../../environments/environment';
import { UserDetails } from './../models/userdetails.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { GET_USER_DETAILS_URL } from '../configs/web.config';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private getPostsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private getPosts1Url = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor( private http: HttpClient) { 
  }
  /** GET heroes from the server */
  postUserDetails(addUser:UserDetails): Observable<UserDetails> {
    return this.http.post<UserDetails>(environment.apiUrl+GET_USER_DETAILS_URL, addUser, httpOptions);
  }
getUsers(): Observable<any> {
  return this.http.get<any>(this.userUrl)
}
getPosts(): Observable<any> {
  return this.http.get<any>(this.getPostsUrl)
}
getPosts1(): Observable<any> {
  return this.http.get<any>(this.getPosts1Url)
}
postPosts(addUser:any): Observable<any> {
  return this.http.post<any>(this.getPostsUrl, addUser, httpOptions);
}
putPosts(putUser:any): Observable<any> {
  return this.http.put<any>(this.getPostsUrl, putUser, httpOptions);
}
deletePost(deleteUser:any): Observable<any> {
  return this.http.delete<any>(this.getPostsUrl, deleteUser);
}
}
