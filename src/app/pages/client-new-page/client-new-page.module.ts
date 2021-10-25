import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientNewPageComponent } from './client-new-page.component';
import { ClientsNewPageRoutingModule } from './client-new-page-routing.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { ClientModule } from 'src/app/features/client/client.module';
import { ClientNewPageService } from 'src/app/features/client/services/client-new-page.service';





@NgModule({
  declarations: [ClientNewPageComponent],
  imports: [
    CommonModule,
    ClientsNewPageRoutingModule,
    FooterModule,
    HeaderModule,
    ClientModule
  ],
  providers: [ClientNewPageService]
})
export class ClientsNewPageModule { }
