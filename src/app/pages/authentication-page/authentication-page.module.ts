import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPageRoutingModule } from './authentication-page-routing.module';
import { AuthenticationPageComponent } from './authentication-page.component';
import { AuthenticationModule } from 'src/app/features/authentication/authentication.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';



@NgModule({
  declarations: [AuthenticationPageComponent],
  imports: [
    CommonModule,
    AuthenticationPageRoutingModule,
    AuthenticationModule,
    HeaderModule,
    FooterModule,
  ],
})
export class AuthenticationPageModule { }
