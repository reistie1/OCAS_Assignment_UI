import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError} from 'rxjs';
import { environment } from '../environments/environment';
import { requestParameters } from '../models/requestParameters';
import { activitySignup } from '../models/activitySignup';
import { response } from '../models/response';
import { pagedResponse } from '../models/pagedResponse';

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
    return this.http.get<response>(`${environment.apiUrl}/Activity`, this.httpOptions)
  }

  RegisterForActivity(signUpRequest: activitySignup)
  {
    return this.http.post<response>(`${environment.apiUrl}/Activity`, signUpRequest, this.httpOptions);
  }

  GetSignedUpActivityList(activityId: string, requestParams: requestParameters)
  {
    console.log("called")
    return this.http.get<pagedResponse>(`${environment.apiUrl}/Activity/${activityId}?pageNumber=${requestParams.pageNumber}&pageSize=${requestParams.pageSize}`, this.httpOptions);
  }


  errorHandler(error: any) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
