import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsDetailsPageRoutingModule } from './client-details-page-routing.module';
import { ClientDetailsPageComponent } from './client-details-page.component';






@NgModule({
  declarations: [ClientDetailsPageComponent],
  imports: [
    CommonModule,
    ClientsDetailsPageRoutingModule
  ]
})
export class ClientsDetailsPageModule { }
