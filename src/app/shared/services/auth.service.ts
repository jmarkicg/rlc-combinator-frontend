import { Injectable } from '@angular/core';
import {endpoints} from "../endpoints";
import {HttpClient, HttpParams} from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    let body = {username, password};
    return this.http.post<{access_token:  string}>(endpoints().rlc.login, body).pipe(tap(res => {
      console.log(res);
      localStorage.setItem('access_token', res.access_token);
     }))
  }

  refreshToken(refreshToken: string): string{
    return 'test';
  }

  getAccessToken(): string{
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string{
    return localStorage.getItem('refresh_token');
  }
}




