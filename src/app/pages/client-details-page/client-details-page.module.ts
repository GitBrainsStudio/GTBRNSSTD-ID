import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsDetailsPageRoutingModule } from './client-details-page-routing.module';
import { ClientDetailsPageComponent } from './client-details-page.component';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { ClientDetailsPageService } from 'src/app/features/client/services/client-details-page.service';
import { ClientModule } from 'src/app/features/client/client.module';






@NgModule({
  declarations: [ClientDetailsPageComponent],
  imports: [
    CommonModule,
    ClientsDetailsPageRoutingModule,
    HeaderModule,
    FooterModule,
    ClientModule
  ],
  providers: [ClientDetailsPageService]
})
export class ClientsDetailsPageModule { }
