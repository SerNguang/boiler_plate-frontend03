import { Injectable } from '@angular/core';
import * as fromAuthModels from './auth';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { User } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /********************************************************************************** */
  // This is a mock service, Don't use examples on this page in production code. Some APIs
  //  might be totally fake, and Some business logic usually handled on the server
  //   will be done on this page. This page is designed to give a back fake data.
  /********************************************************************************** */
  baseUrl: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'authentication/login', {email, password})
  }

  signup( user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'authentication/register', user)
  }  

  // createUser(model: User): Observable<User> {
  //   return this.http.post<User>(this.baseUrl + 'authentication/register', model);
  // }

  // createProduct(model: Product): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl + 'products', model);
  // }
}
