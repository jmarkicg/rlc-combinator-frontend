import {Observable, BehaviorSubject} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {endpoints} from "../endpoints";
import {AuthService} from "../services/auth.service";
import {catchError, switchMap, finalize, filter, take} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent,
  HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import {AuthModel} from "../model/auth-model";


@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  private noAuthUrls = [
    endpoints().rlc.login,
    endpoints().rlc.refreshToken
  ];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}


  private authRequest(request: HttpRequest<any>, authToken: string): HttpRequest<any> {
    return authToken != ''?request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    }) : request;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    if (request.url.includes("auth/login") || request.url.includes("assets")){
          return next.handle(request);
    } else {
      return next.handle(this.authRequest(request, this.authService.getAccessToken()))
        .pipe(
          catchError(err => {
            if (err instanceof HttpErrorResponse) {
              switch ((<HttpErrorResponse>err).status) {
                case 401:
                  return this.handle401Error(request, next);
                case 400:
                  return <any>this.authService.logout();
              }
            } else {
              return throwError(err);
            }
          }));
    }
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if(!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      return this.authService.refreshAccessToken()
        .pipe(
          switchMap((auth: AuthModel) => {
            if(auth) {
              this.tokenSubject.next(auth.access_token);;
              return next.handle(this.authRequest(request, this.authService.getAccessToken()));
            }

            return <any>this.authService.logout();
          }),
          catchError(err => {
            return <any>this.authService.logout();
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          })
        );
    } else {
      this.isRefreshingToken = false;

      return this.tokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
            return next.handle(this.authRequest(request, token));
          }));
    }
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   if (request.url.includes("auth/")){
  //     return next.handle(request);
  //   } else {
  //     //console.log(request);
  //     let accessToken = this.authService.getAccessToken();
  //     let req = this.authRequest(request, accessToken);
  //     return next.handle(req).pipe(
  //         catchError(err => {
  //             if (err.status === 401) {
  //               console.log('before refresh.' + accessToken);
  //               this.authService.refreshAccessToken().pipe().subscribe(
  //                 res => {  console.log('got access token.' + res.access_token);
  //                                 return next.handle(this.authRequest(request, res.access_token))
  //                 } );
  //             }else{
  //               return throwError(err.statusText);
  //             }
  //         }
  //
  //         ));
  //     }
  //
  // }
  //const authService = this.injector.get(AuthService);
  //skip if we're retrieving accessToken by refreshToken
  // if (request.url.includes("auth/")){
  //   return next.handle(request);
  // } else {
  //   console.log(request);
  //   let accessToken = this.authService.getAccessToken();
  //   if (!this.authService.isTokenValid()) {
  //     this.authService.refreshAccessToken().pipe().subscribe(
  //       res => accessToken = res.access_token);
  //   }
  //   return next.handle(this.authRequest(request, accessToken));
  //
  //   let accessToken = this.authService.getAccessToken();
  //   let req = this.authRequest(request, accessToken);
  //   return next.handle(req)
  //     .catchError(error => {
  //       if (error instanceof HttpErrorResponse && error.status == 404) {
  //         this.router.navigateByUrl('/not-found', {replaceUrl: true});
  //
  //         return new EmptyObservable();
  //       }
  //       else
  //         return _throw(error);
  //     });
  // }
  //   return next.handle(req).pipe(
  //     catch(error => {
  //         // checks if a url is to an admin api or not
  //         if (error.status === 401) {
  //           // attempting to refresh our token
  //         }
  //       }
  //     ));
  // }
  // }
  //

    //   return next.handle(authReq).pipe(
    //     catchError(error => {
    //       // checks if a url is to an admin api or not
    //       if (error.status === 401) {
    //         // attempting to refresh our token
    //       }
    //     }
    // });
    //
    //
    //   if (!valid){
    //     this.authService.refreshAccessToken().subscribe(
    //       (response: AuthModel) => accessToken = response.access_token);
    //   }
    //
    //   if (accessToken) {
    //     // add authorization header with jwt token if available
    //     request = request.clone({
    //       setHeaders: {
    //         Authorization: `Bearer ${accessToken}`
    //       }
    //     });
    //   }
    //
    // }
    // return next.handle(request);



 /*   return next
      .handle(request)
      .pipe(
        catchError((error: HttpErrorResponse | any) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401 && this.noAuthUrls.indexOf(error.url) === -1) {
              const refreshToken = authService.getRefreshToken();
              // check if error type is 1 and refresh token is present
              if (refreshToken && 'error' in error && 'messages' in error.error && error.error.messages.length > 0
                && 'type' in error.error.messages[0] && error.error.messages[0].type === 1) {
                return authService
                  .refreshToken(refreshToken).pipe(
                    mergeMap(jwt => {
                      return next.handle(this.authRequest(request, jwt.access_token));
                    }));
              }
              this.goToLogin();
            }
          }
          return observableThrowError(error);
        }));*/



}
