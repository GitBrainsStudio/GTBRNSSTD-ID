import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private router:Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentAccount = this.authenticationService?.authenticatedAccount;
        const isLoggedIn = currentAccount?.account;

        if (currentAccount && isLoggedIn)
        {
            request = request.clone({ headers: request.headers.set('authorization', `${currentAccount.access_token}`) });
           
        }


        return next.handle(request).pipe(
            catchError(response => {
              
              if(response.status === 401) {
                this.authenticationService.logout()
                this.router.navigate(['/login'], { queryParams: { redirect: this.router.url } });
                return EMPTY
              }
              else return throwError(response);
            })
           )

    }
}