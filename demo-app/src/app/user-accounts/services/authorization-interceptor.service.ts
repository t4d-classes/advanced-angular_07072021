import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { UserAccountsService } from './user-accounts.service';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationInterceptorService implements HttpInterceptor {

  constructor(private userAccountsSvc: UserAccountsService) { }

  private withAccessToken(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.userAccountsSvc.getAccessToken(),
      ),
    });
  }

  private withRefreshToken(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      method: 'GET',
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.userAccountsSvc.getRefreshToken(),
      ),
    });
  }


  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url.endsWith('/users/login')) {
      return next.handle(req);
    }

    if (req.url.endsWith('/users/refresh')) {
      return next.handle(this.withRefreshToken(req));
    }

    return next.handle(this.withAccessToken(req)).pipe(
      catchError((err, caught) => {

        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {

            return this.userAccountsSvc.refreshUser()
              .pipe(
                switchMap(() => next.handle(this.withAccessToken(req)))
              );

          } else {
            return throwError(err);
          }

        }

        return caught;

      }),
    );
  }
}
