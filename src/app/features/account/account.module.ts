
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountFormRolesEditorComponent } from './components/account-form-roles-editor/account-form-roles-editor.component';
import { AccountService } from './services/account.service';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';
import { ProgramService } from '../program/services/program.service';

@NgModule({
  declarations: [
    AccountDetailsComponent,
    AccountFormComponent,
    AccountFormRolesEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AccountDetailsComponent,
    AccountFormComponent,
    AccountFormRolesEditorComponent,
  ],
  providers: [AccountService, ProgramService, GuidGenerationService]
})
export class AccountModule { }
