import { ApplicationModule, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BadgeModule } from '../badge/badge.module';
import { AccountService } from './services/account.service';
import { ApplicationService } from '../Application/services/Application.service';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountFormRolesEditorComponent } from './components/account-form-roles-editor/account-form-roles-editor.component';
import { AccountFormComponent } from './components/account-form/account-form.component';

@NgModule({
  declarations: [
    AccountDetailsComponent,
    AccountFormComponent,
    AccountFormRolesEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BadgeModule,
    ApplicationModule,
  ],
  exports: [
    AccountDetailsComponent,
    AccountFormComponent,
    AccountFormRolesEditorComponent
  ],
  providers: [AccountService, ApplicationService]
})
export class AccountModule { }
