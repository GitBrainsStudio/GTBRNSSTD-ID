import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientNewPageComponent } from './client-new-page.component';
import { ClientsNewPageRoutingModule } from './client-new-page-routing.module';






@NgModule({
  declarations: [ClientNewPageComponent],
  imports: [
    CommonModule,
    ClientsNewPageRoutingModule
  ]
})
export class ClientsNewPageModule { }
