import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientEditModule } from './client-edit/client-edit.module';
import { ClientDetailsModule } from './client-details/client-details.module';



@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientEditModule,
    ClientDetailsModule
  ],
  exports: [ClientComponent]
})
export class ClientModule { }
