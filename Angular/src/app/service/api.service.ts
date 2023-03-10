import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL  = 'http://localhost:8000/api/';
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

constructor(private httpClient: HttpClient) {}


getAll(): Observable < any > {
  return this.httpClient.get < any > (this.apiURL + 'posts/').pipe(catchError(this.errorHandler));
}
// addUser(user: User): Observable < User > {
//   return this.httpClient.post < User > (this.apiURL + 'userapi/', JSON.stringify(user), this.httpOptions).pipe(catchError(this.errorHandler))
// }
// getUsersByID(id: number): Observable < User > {
//   return this.httpClient.get < User > (this.apiURL + '/userapi/' + id).pipe(catchError(this.errorHandler))
// }
// updateUser(user: User): Observable < User > {
//   return this.httpClient.put < User > (this.apiURL + '/userapi/' + user.id, JSON.stringify(user), this.httpOptions).pipe(catchError(this.errorHandler))
// }
// removeUser(id: number) {
//   return this.httpClient.delete < User > (this.apiURL + 'userapi/' + id, this.httpOptions).pipe(catchError(this.errorHandler));
// }
errorHandler(error: {
  error: {
      message: string;
  };status: any;message: any;
}) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
  } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}
