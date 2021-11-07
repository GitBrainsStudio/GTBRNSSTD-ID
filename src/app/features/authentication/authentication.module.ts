
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthenticationFormComponent } from './components/authentication-form/authentication-form.component';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
  declarations: [
    AuthenticationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AuthenticationFormComponent
  ],
})

export class AuthenticationModule {}
