import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';
import { BadgeModule } from '../badge/badge.module';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';
import { ApplicationFormRolesEditorComponent } from './components/application-form-roles-editor/application-form-roles-editor.component';
import { ApplicationComponent } from './components/application-form/application-form.component';
import { ApplicationService } from './services/Application.service';

@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationDetailsComponent,
    ApplicationFormRolesEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BadgeModule
  ],
  exports: [
    ApplicationComponent,,
    ApplicationDetailsComponent,
    ApplicationFormRolesEditorComponent
  ],
  providers: [ApplicationService, GuidGenerationService]
})
export class ApplicationModule { }
