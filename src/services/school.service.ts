import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { School } from 'src/models/School';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getSchoolInformation(SchoolId: string)
  {
    return this.httpClient.get<School>(`${environment.apiUrl}/School/a0694c99-bbe6-42f4-88d5-13ebe5baa849`).pipe(catchError(this.errorHandler))
  }

  updateSchoolInformation(updatedSchoolInfo: any)
  {
    console.log(updatedSchoolInfo);
    return this.httpClient.patch<School>(`${environment.apiUrl}/School`, {id: updatedSchoolInfo.Id, name: updatedSchoolInfo.Name, address: {id: updatedSchoolInfo.addressId, address1: updatedSchoolInfo.Address1, address2: updatedSchoolInfo.Address2, city: updatedSchoolInfo.City, postalCode: updatedSchoolInfo.PostalCode, province: updatedSchoolInfo.Province}}, this.httpOptions)
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
