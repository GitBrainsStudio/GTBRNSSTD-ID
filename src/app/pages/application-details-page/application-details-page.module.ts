import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsDetailsPageRoutingModule } from './application-details-page-routing.module';
import { ApplicationDetailsPageComponent } from './application-details-page.component';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { ApplicationDetailsPageService } from 'src/app/features/Application/services/Application-details-page.service';
import { ApplicationModule } from 'src/app/features/Application/Application.module';






@NgModule({
  declarations: [ApplicationDetailsPageComponent],
  imports: [
    CommonModule,
    ApplicationsDetailsPageRoutingModule,
    HeaderModule,
    FooterModule,
    ApplicationModule
  ],
  providers: [ApplicationDetailsPageService]
})
export class ApplicationsDetailsPageModule { }
