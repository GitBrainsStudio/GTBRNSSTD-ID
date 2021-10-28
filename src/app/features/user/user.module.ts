import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule } from '../badge/badge.module';
import { UserService } from './services/user.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ClientModule } from '../client/client.module';
import { ClientService } from '../client/services/client.service';
import { UserRolesEditorComponent } from './components/user-roles-editor/user-roles-editor.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    UserFormComponent,
    UserRolesEditorComponent,
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
    UserRolesEditorComponent
  ],
  providers: [UserService, ClientService]
})
export class UserModule { }
