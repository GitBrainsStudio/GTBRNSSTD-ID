import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { BadgeModule } from '../badge/badge.module';
import { ClientFormAddingInUserComponent } from './components/client-form-adding-in-user/client-form-adding-in-user.component';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';
import { ClientRolesEditorComponent } from './components/client-roles-editor/client-roles-editor.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ClientFormAddingInUserComponent,
    ClientRolesEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BadgeModule
  ],
  exports: [
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
    ClientFormAddingInUserComponent,
    ClientRolesEditorComponent
  ],
  providers: [ClientService, GuidGenerationService]
})
export class ClientModule { }
