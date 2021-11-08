import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { AccountModule } from 'src/app/features/account/account.module';
import { ProgramModule } from 'src/app/features/program/program.module';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,  
    AccountModule,
    ProgramModule,
    FooterModule,
    HeaderModule,
  ],
})
export class HomePageModule { }
