import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { AuthenticationService } from '../authentication/authentication.service';
import { ClientModule } from '../client/client.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientModule,
    HeaderModule,
    FooterModule
  ],
  providers: [AuthenticationService],
  exports: [ClientsComponent]
})
export class ClientsModule { }
