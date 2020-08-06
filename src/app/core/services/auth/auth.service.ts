import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken: string;

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line: typedef
  login(user){

    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });

    return this.http.post(
      `${environment.API_URL}login`,
      user, {headers}
    ).pipe(
      map( (resp: any) => {
        this.saveToken(resp.token);
        this.saveUser(resp.user);
        return resp;
      })
    );
  }


  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
  }


  // tslint:disable-next-line: typedef
  private saveUser(data: any){
    localStorage.setItem('user', JSON.stringify(data));
  }


  // tslint:disable-next-line: typedef
  private saveToken(accessToken: string){
    this.accessToken = accessToken;
    localStorage.setItem('token', accessToken);

    const today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expires_in', today.getTime().toString());
  }


  isAutenticated(): boolean{

    const token = localStorage.getItem('token');

    const expira = Number(localStorage.getItem('expires_in'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (token && expiraDate > new Date()){
      return true;
    }else{
      return false;
    }
  }

}
