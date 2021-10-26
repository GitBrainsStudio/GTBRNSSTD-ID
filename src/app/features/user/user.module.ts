import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule } from '../badge/badge.module';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ClientModule } from '../client/client.module';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BadgeModule,
    ClientModule
  ],
  exports: [
    UserDetailsComponent,
    UserFormComponent,
  ],
  providers: [UserService]
})
export class UserModule { }
