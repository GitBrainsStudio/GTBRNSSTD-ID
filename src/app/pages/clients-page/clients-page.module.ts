import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsPageRoutingModule } from './clients-page-routing.module';
import { ClientsPageComponent } from './clients-page.component';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';



@NgModule({
  declarations: [ClientsPageComponent],
  imports: [
    CommonModule,
    ClientsPageRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class ClientsPageModule { }
