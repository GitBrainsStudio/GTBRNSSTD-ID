import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationNewPageComponent } from './application-new-page.component';
import { ApplicationsNewPageRoutingModule } from './application-new-page-routing.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { ApplicationModule } from 'src/app/features/Application/Application.module';
import { ApplicationNewPageService } from 'src/app/features/Application/services/Application-new-page.service';





@NgModule({
  declarations: [ApplicationNewPageComponent],
  imports: [
    CommonModule,
    ApplicationsNewPageRoutingModule,
    FooterModule,
    HeaderModule,
    ApplicationModule
  ],
  providers: [ApplicationNewPageService]
})
export class ApplicationsNewPageModule { }
