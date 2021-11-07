
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProgramDetailsComponent } from './components/program-details/program-details.component';
import { ProgramFormComponent } from './components/program-form/program-form.component';
import { ProgramFormRolesEditorComponent } from './components/program-form-roles-editor/program-form-roles-editor.component';
import { AccountService } from '../account/services/account.service';
import { ProgramService } from './services/program.service';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';

@NgModule({
  declarations: [
    ProgramDetailsComponent,
    ProgramFormComponent,
    ProgramFormRolesEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ProgramDetailsComponent,
    ProgramFormComponent,
    ProgramFormRolesEditorComponent,
  ],
  providers: [AccountService, ProgramService, GuidGenerationService]
})
export class ProgramModule { }
