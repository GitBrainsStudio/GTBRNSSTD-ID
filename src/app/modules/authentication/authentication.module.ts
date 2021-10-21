import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../footer/footer.module';
import { AuthenticationComponent } from './authentication.component';
import { HeaderModule } from '../header/header.module';
import { SnackbarModule } from '../snackbar/snackbar.module';



@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
  ],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
