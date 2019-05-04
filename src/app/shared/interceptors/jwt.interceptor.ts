import {Observable, BehaviorSubject} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {endpoints} from "../endpoints";
import {AuthService} from "../services/auth.service";
import {catchError} from 'rxjs/operators';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  private noAuthUrls = [
    endpoints().rlc.login,
    endpoints().rlc.refreshToken
  ];

  constructor(
   // private injector: Injector,
    private router: Router,
    private authService: AuthService
  ) {}


  private authRequest(request, authToken) {
    return authToken != ''?request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    }) : request;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes("auth/")){
      return next.handle(request);
    } else {
      console.log(request);
      let accessToken = this.authService.getAccessToken();
      let req = this.authRequest(request, accessToken);
      return next.handle(req).pipe(
          catchError(err => {return new EmptyObservable()}
            //{
            //return "fdfsd";
          //testconsole.log('unathorized');
              // if (error.status === 401) {
              //   console.log('unathorized');
              //   // attempting to refresh our token
              //   this.authService.refreshAccessToken().pipe().subscribe(
              //     res => {  console.log('got access token.');
              //                    //return next.handle(this.authRequest(request, res.access_token))
              //        } );
              // }
           // }
          ));
      }

  }
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
