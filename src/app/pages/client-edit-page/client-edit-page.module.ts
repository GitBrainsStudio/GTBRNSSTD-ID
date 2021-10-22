import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsEditPageRoutingModule } from './client-edit-page-routing.module';
import { ClientEditPageComponent } from './client-edit-page.component';






@NgModule({
  declarations: [ClientEditPageComponent],
  imports: [
    CommonModule,
    ClientsEditPageRoutingModule
  ]
})
export class ClientsEditPageModule { }
