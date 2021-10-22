import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationDefaultFormComponent } from './components/authentication-default-form/authentication-default-form.component';



@NgModule({
  declarations: [
    AuthenticationDefaultFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthenticationDefaultFormComponent
  ]
})
export class AuthenticationModule { }
