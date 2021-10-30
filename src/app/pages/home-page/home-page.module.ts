import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { BadgeModule } from 'src/app/features/badge/badge.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { ApplicationService } from 'src/app/features/application/services/application.service';
import { AccountService } from 'src/app/features/account/services/account.service';
import { ApplicationModule } from 'src/app/features/application/application.module';
import { AccountModule } from 'src/app/features/account/user.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule,
    BadgeModule,
    AccountModule,
    ApplicationModule
  ],
  providers: [ApplicationService, AccountService]
})
export class HomePageModule { }
