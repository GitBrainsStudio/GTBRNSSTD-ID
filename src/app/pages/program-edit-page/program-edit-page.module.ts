import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramEditPageComponent } from './program-edit-page.component';
import { ProgramModule } from 'src/app/features/program/program.module';
import { ProgramEditPageService } from 'src/app/features/program/services/program-edit-page.service';
import { ProgramEditPageRoutingModule } from './program-edit-page-routing.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';






@NgModule({
  declarations: [ProgramEditPageComponent],
  imports: [
    CommonModule,
    ProgramModule,
    ProgramEditPageRoutingModule,
    HeaderModule,
    FooterModule
  ],
  providers: [ProgramEditPageService ]
})
export class ProgramEditPageModule { }
