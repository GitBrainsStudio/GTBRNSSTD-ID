import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthenticationService } from '../features/authentication/services/authentication.service';


@NgModule({
  imports: [
      CommonModule,
      HttpClientModule
  ],
  exports: [
      CommonModule, 
      HttpClientModule
    ],

  providers: [AuthenticationService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
})
export class CoreModule { }
