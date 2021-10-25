import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UserDetailsPageComponent } from './user-details-page.component';
import { UserDetailsPageRoutingModule } from './user-details-page-routing.module';
import { UserDetailsPageService } from 'src/app/features/user/services/user-details-page.service';
import { UserModule } from 'src/app/features/user/user.module';





@NgModule({
  declarations: [UserDetailsPageComponent],
  imports: [
    CommonModule,
    UserDetailsPageRoutingModule,
    FooterModule,
    HeaderModule,
    UserModule
  ],
  providers: [UserDetailsPageService]
})
export class UserDetailsPageModule { }
