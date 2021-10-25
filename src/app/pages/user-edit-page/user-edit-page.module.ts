import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { UserNewPageRoutingModule } from './user-edit-page-routing.module';
import { UserNewPageComponent } from '../user-new-page/user-new-page.component';
import { UserEditPageComponent } from './user-edit-page.component';
import { UserEditPageService } from 'src/app/features/user/services/user-edit-page.service';
import { UserModule } from 'src/app/features/user/user.module';





@NgModule({
  declarations: [UserEditPageComponent],
  imports: [
    CommonModule,
    UserNewPageRoutingModule,
    FooterModule,
    HeaderModule,
    UserModule
  ],
  providers: [UserEditPageService]
})
export class UserEditPageModule { }
