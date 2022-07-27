import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })

export class AccountService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  }

  constructor(private http: HttpClient)
  {}

  register(register: any) {
    return this.http.post(`${environment}/Account/register`, register, this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  login(login: any) {
    return this.http.post(`${environment}/Account/login`, login, this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  logout(login: any) {
    return this.http.post(`${environment}/Account/logout`, login, this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
