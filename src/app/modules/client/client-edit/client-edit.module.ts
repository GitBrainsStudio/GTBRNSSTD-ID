import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEditComponent } from './client-edit.component';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';



@NgModule({
  declarations: [ClientEditComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [ClientEditComponent]
})
export class ClientEditModule { }
