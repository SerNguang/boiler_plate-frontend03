import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, PaginatedResult } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaginationService } from 'src/app/shared/services/pagination.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /********************************************************************************** */
  // This is a mock service, Don't use examples on this page in production code. Some APIs
  //  might be totally fake, and Some business logic usually handled on the server
  //   will be done on this page. This page is designed to give a back fake data.
  /********************************************************************************** */
  constructor(
    private http: HttpClient,
    private pagination: PaginationService
  ) {}

  baseUrl: string = 'http://localhost:3000/';

  createUser(model: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'users', model);
  }

  getUsers(url: string): Observable<PaginatedResult<User[]>> {
    let paginatedResult: PaginatedResult<User[]> = {
      result: undefined,
      pagination: undefined,
    };
    return this.http
      .get<User[]>(url, { observe: 'response' })
      .pipe(
        map((response) => {
          paginatedResult.result = response.body;

          paginatedResult.pagination = this.pagination.parseReturnedPaginationUrls(
            response.headers.get('Link')
          );
          return paginatedResult;
        })
      );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + userId);
  }

  editUser(model: User): Observable<User> {
    return this.http.put<User>(this.baseUrl + 'users/' + model.id, model);
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + 'users/' + userId);
  }
}
