import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { User } from '../models/User';
import { Course } from 'src/models/Course';

@Injectable({ providedIn: 'root' })

export class CourseService {
  private data = new BehaviorSubject<Course[]>([]);
  readonly datas = this.data.asObservable();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  }

  constructor(private http: HttpClient)
  {}

  getCourseList(schoolId: string) {
    return this.http.post<Course[]>('https://localhost:7280/api/v1/Course/list/a0694c99-bbe6-42f4-88d5-13ebe5baa849',{pageNumber: 1, pageSiz: 50},this.httpOptions);
  }

  addCourse(newCourse: Course) {
    return this.http.post(`${environment.apiUrl}/Course`, {...newCourse, schoolId: 'a0694c99-bbe6-42f4-88d5-13ebe5baa849'}, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
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
