import { Injectable } from '@angular/core';
import {endpoints} from "../endpoints";
import {HttpClient, HttpParams} from "@angular/common/http";
import { tap } from 'rxjs/operators';
import {AuthModel} from "../model/auth-model";
import { JwtHelperService } from '@auth0/angular-jwt';
import {JwtClaimsModel} from "../model/jwt-claims-model";
import { MatSnackBar} from "@angular/material";
import { Router } from '@angular/router';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_DATA: string = "auth_data";

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private snackBar: MatSnackBar, public router: Router) {
  }

  login(username:string, password:string) {
    let body = {username, password};
    return this.http.post<AuthModel>(endpoints().rlc.login, body).pipe(tap(
       res =>{this.handleSuccess(res)},
      err => {this.handleError(err);}))
  }

  refreshAccessToken(): Observable<AuthModel> {
    let refreshToken = this.getRefreshToken();
    let authModel = new AuthModel();
    authModel.refresh_token = refreshToken;
    //console.log(endpoints().rlc.refreshToken + '/' + refreshToken);
    return this.http.post<AuthModel>(endpoints().rlc.refreshToken, authModel).pipe(tap(
      res =>{this.handleSuccess(res)},
      err => {this.handleError(err);}))

  }

  handleSuccess(res: any){
    localStorage.setItem(this.AUTH_DATA, JSON.stringify(res));
  }

  handleError(err: any){
    let msg = (err.status == 401)? "Invalid credentials." : "Internal server error.";
    this.snackBar.open(msg, 'ERROR', { duration: 2000, verticalPosition: 'top'});
  }

  logout(){
    localStorage.removeItem(this.AUTH_DATA);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean{
    return this.isTokenValid();
   }

   isTokenValid(): boolean{
     return this.getAccessToken() != null && !this.jwtHelper.isTokenExpired(this.getAccessToken());
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
    let auth = this.getAccessToken();
    let decodedToken : JwtClaimsModel;
    decodedToken = this.jwtHelper.decodeToken(auth);
    return decodedToken.sub;
  }

}




