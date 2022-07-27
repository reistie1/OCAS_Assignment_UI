import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from 'src/models/Student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  }

  constructor(private http: HttpClient) { }

  getStudentList(schoolId: string) {
    return this.http.get<Student[]>(`${environment.apiUrl}/Student/${schoolId}`, this.httpOptions);
  }

  addStudent(newStudent: Student) {
    return this.http.post(`${environment.apiUrl}/Student`, {...newStudent, schoolId: 'a0694c99-bbe6-42f4-88d5-13ebe5baa849'}, this.httpOptions).pipe(
      catchError(this.errorHandler)
    )
  }

  deleteStudent(studentId: string) {
    return this.http.delete(`${environment.apiUrl}/Student/${studentId}`, this.httpOptions).pipe(catchError(this.errorHandler))
  }

  updateStudent(updatedStudent: any) {
    console.log(updatedStudent);
    return this.http.patch(`${environment.apiUrl}/Student`, updatedStudent, this.httpOptions).pipe(
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
