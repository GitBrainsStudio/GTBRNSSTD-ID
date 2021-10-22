import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationPageRoutingModule } from './authentication-page-routing.module';
import { AuthenticationPageComponent } from './authentication-page.component';
import { AuthenticationModule } from 'src/app/features/authentication/authentication.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { SnackbarModule } from 'src/app/features/snackbar/snackbar.module';



@NgModule({
  declarations: [AuthenticationPageComponent],
  imports: [
    CommonModule,
    AuthenticationPageRoutingModule,
    AuthenticationModule,
    FooterModule,
    HeaderModule,
    SnackbarModule
  ]
})
export class AuthenticationPageModule { }
