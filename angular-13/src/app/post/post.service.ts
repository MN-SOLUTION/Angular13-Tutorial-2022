import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';  




@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl:string="https://jsonplaceholder.typicode.com";
  
  //httpheader
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private httpClient: HttpClient) { }


  getAllPost():Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl + '/posts').pipe(catchError(this.errorHandler))
  }


  createNewPost(payload:Post):Observable<Post>{
    return this.httpClient.post<Post>
    (this.apiUrl + '/posts/',JSON.stringify(payload), this.httpOptions)
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
