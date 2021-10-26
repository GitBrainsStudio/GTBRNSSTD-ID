import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { BadgeModule } from 'src/app/features/badge/badge.module';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { ClientService } from 'src/app/features/client/services/client.service';
import { UserService } from 'src/app/features/user/services/user.service';
import { UserModule } from 'src/app/features/user/user.module';
import { ClientModule } from 'src/app/features/client/client.module';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    HeaderModule,
    FooterModule,
    BadgeModule,
    UserModule,
    ClientModule
  ],
  providers: [ClientService, UserService]
})
export class HomePageModule { }
