import { User } from './../../models/user';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get(`${environment.API_URL}users`)
      .pipe(
        map( (response: any) => response.users as User[])
      );
  }

  // tslint:disable-next-line: typedef
  getUser(){
    return this.http.get(`${environment.API_URL}users`)
      .pipe(
        map( (resp: any) => resp.data)
      );
  }

  // tslint:disable-next-line: typedef
  postUser(user){
    return this.http.post(`${environment.API_URL}users`, user );
  }
}
