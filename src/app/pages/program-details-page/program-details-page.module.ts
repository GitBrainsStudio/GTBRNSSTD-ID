import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramDetailsPageComponent } from './program-details-page.component';
import { ProgramDetailsPageRoutingModule } from './program-details-page-routing.module';
import { ProgramModule } from 'src/app/features/program/program.module';
import { ProgramDetailsPageService } from 'src/app/features/program/services/program-details-page.service';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';






@NgModule({
  declarations: [ProgramDetailsPageComponent],
  imports: [
    CommonModule,
    ProgramDetailsPageRoutingModule,
    ProgramModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ProgramDetailsPageService]
})
export class ProgramDetailsPageModule { }
