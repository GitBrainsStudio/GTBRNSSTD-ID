import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UserEditPageComponent } from './user-edit-page.component';
import { UserModule } from 'src/app/features/user/user.module';
import { UserEditPageRoutingModule } from './user-edit-page-routing.module';
import { UserEditPageService } from 'src/app/features/user/services/user-edit-page.service';





@NgModule({
  declarations: [UserEditPageComponent],
  imports: [
    CommonModule,
    UserEditPageRoutingModule,
    FooterModule,
    HeaderModule,
    UserModule,
  ],
  providers: [UserEditPageService]
})
export class UserEditPageModule { }
