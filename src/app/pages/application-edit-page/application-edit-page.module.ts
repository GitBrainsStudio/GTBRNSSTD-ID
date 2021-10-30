import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsEditPageRoutingModule } from './application-edit-page-routing.module';
import { ApplicationEditPageComponent } from './application-edit-page.component';
import { ApplicationEditPageService } from 'src/app/features/Application/services/Application-edit-page.service';
import { ApplicationModule } from 'src/app/features/Application/Application.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { ButtonModule } from 'src/app/features/button/button.module';






@NgModule({
  declarations: [ApplicationEditPageComponent],
  imports: [
    CommonModule,
    ApplicationsEditPageRoutingModule,
    FooterModule,
    HeaderModule,
    ApplicationModule,
    ButtonModule
  ],
  providers: [ApplicationEditPageService]
})
export class ApplicationsEditPageModule { }
