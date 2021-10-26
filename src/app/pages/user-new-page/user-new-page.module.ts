import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UserNewPageComponent } from './user-new-page.component';
import { UserNewPageRoutingModule } from './user-new-page-routing.module';
import { UserNewPageService } from 'src/app/features/user/services/user-new-page.service';
import { UserModule } from 'src/app/features/user/user.module';





@NgModule({
  declarations: [UserNewPageComponent],
  imports: [
    CommonModule,
    UserNewPageRoutingModule,
    FooterModule,
    HeaderModule,
    UserModule
  ],
  providers: [UserNewPageService]
})
export class UserNewPageModule { }
