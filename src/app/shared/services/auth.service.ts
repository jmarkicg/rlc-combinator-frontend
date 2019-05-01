import { Injectable } from '@angular/core';
import {endpoints} from "../endpoints";
import {HttpClient, HttpParams} from "@angular/common/http";
import { tap } from 'rxjs/operators';
import {AuthModel} from "../model/auth-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_DATA: string = "auth_data";

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    let body = {username, password};
    return this.http.post<AuthModel>(endpoints().rlc.login, body).pipe(tap(res => {
     console.log(res);
      localStorage.setItem(this.AUTH_DATA, JSON.stringify(res));
     },
      err => {console.log(err);}))
  }

  logout(){
    localStorage.removeItem(this.AUTH_DATA);
  }

  isLoggedIn(): boolean{
    return (this.getAccessToken() != null);
   }

  refreshToken(refreshToken: string): string{
    return 'test';
  }

  getAuthModel():AuthModel{
    let str = localStorage.getItem(this.AUTH_DATA);
    return str != null?<AuthModel>JSON.parse(str) : null;
  }

  getAccessToken(): string{
    let auth = this.getAuthModel();
    return auth != null? auth.access_token : null;
  }

  getRefreshToken(): string{
    let auth = this.getAuthModel();
    return auth != null? auth.refresh_token : null;
  }

  getUsername(): string{
    let auth = this.getAuthModel();
    return auth != null? auth.username : null;
  }

}




