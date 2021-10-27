import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsEditPageRoutingModule } from './client-edit-page-routing.module';
import { ClientEditPageComponent } from './client-edit-page.component';
import { ClientEditPageService } from 'src/app/features/client/services/client-edit-page.service';
import { ClientModule } from 'src/app/features/client/client.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { ButtonModule } from 'src/app/features/button/button.module';






@NgModule({
  declarations: [ClientEditPageComponent],
  imports: [
    CommonModule,
    ClientsEditPageRoutingModule,
    FooterModule,
    HeaderModule,
    ClientModule,
    ButtonModule
  ],
  providers: [ClientEditPageService]
})
export class ClientsEditPageModule { }
