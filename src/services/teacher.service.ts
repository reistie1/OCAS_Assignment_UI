import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';
import { Teacher } from 'src/models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  }

  constructor(private httpClient: HttpClient) { }

  addSchoolTeacher(newTeacher: any)
  {
    return this.httpClient.post<Teacher>(`${environment.apiUrl}/Teacher`, newTeacher, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  updateSchoolTeacher(updatedTeacher: any)
  {
    console.log(updatedTeacher);
    return this.httpClient.patch<Teacher>(`${environment.apiUrl}/Teacher`, updatedTeacher, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  deleteSchoolTeacher(deleteTeacherId: string)
  {
    return this.httpClient.delete<boolean>(`${environment.apiUrl}/Teacher/${deleteTeacherId}`, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  getSchoolTeachers(schoolId: string)
  {
    return this.httpClient.get<Teacher[]>(`${environment.apiUrl}/Teacher/list/a0694c99-bbe6-42f4-88d5-13ebe5baa849`,this.httpOptions).pipe(catchError(this.errorHandler))
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
