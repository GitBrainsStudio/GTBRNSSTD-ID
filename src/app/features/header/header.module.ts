
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule { }
