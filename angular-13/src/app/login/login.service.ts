import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { LoginModel } from './login';  
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  private apiUrl:string="https://localhost:7074/api/Authenticate/login";
   //httpheader
   httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private httpClient:HttpClient) { }

 

  login(payload:LoginModel):Observable<LoginModel>{
    return this.httpClient.post<LoginModel>
    (this.apiUrl,JSON.stringify(payload), this.httpOptions)
    .pipe(catchError(this.errorHandler))
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }


}