import { User } from './../../models/user';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{

    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization : localStorage.getItem('token')
    });


    return this.http.get(`${environment.API_URL}users`, {headers})
      .pipe(
        map( (response: any) => response.users as User[])
      );
  }

  // tslint:disable-next-line: typedef
  getUser(){
  }

  // tslint:disable-next-line: typedef
  postUser(user){
    return this.http.post(`${environment.API_URL}users`, user );
  }
}
