import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramNewPageRoutingModule } from './program-new-page-routing.module';
import { ProgramNewPageComponent } from './program-new-page.component';
import { ProgramModule } from 'src/app/features/program/program.module';
import { ProgramNewPageService } from 'src/app/features/program/services/program-new-page.service';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';






@NgModule({
  declarations: [ProgramNewPageComponent],
  imports: [
    CommonModule,
    ProgramNewPageRoutingModule,
    ProgramModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    ProgramNewPageService
  ]
  
})
export class ProgramNewPageModule { }
