import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError} from 'rxjs';
import { environment } from '../environments/environment';
import { activitySignup } from '../models/activitySignup';

@Injectable({ providedIn: 'root' })

export class ActivityService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  }

  constructor(private http: HttpClient)
  {}

  GetActivityList()
  {
    return this.http.get(`${environment.apiUrl}/Activity`, this.httpOptions);
  }

  RegisterForActivity(signUpRequest: any)
  {
    return this.http.post(`${environment.apiUrl}/Activity`, signUpRequest, this.httpOptions);
  }

  GetSignedUpActivityList(activityId: string)
  {
    return this.http.get(`${environment.apiUrl}/Activity/${activityId}`, this.httpOptions);
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
