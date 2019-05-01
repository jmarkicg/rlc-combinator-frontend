import {Observable, BehaviorSubject} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {endpoints} from "../endpoints";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {

  private noAuthUrls = [
    endpoints().rlc.login
  ];

  constructor(
    private injector: Injector,
    private router: Router,
    private authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log(request);
    const authService = this.injector.get(AuthService);
    // add authorization header with jwt token if available
    let accessToken = authService.getAccessToken();
    console.log(accessToken);
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
    console.log(request);
    return next.handle(request);
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


  private goToLogin() {
    this.router.navigate(['/login']);
  }

  private goToError() {
    this.router.navigate(['/error']);
  }

  private authRequest(request, authToken) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }

}
