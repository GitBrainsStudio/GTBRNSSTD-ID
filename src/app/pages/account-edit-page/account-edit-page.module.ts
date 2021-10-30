import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { AccountEditPageComponent } from './account-edit-page.component';
import { AccountEditPageRoutingModule } from './account-edit-page-routing.module';
import { AccountEditPageService } from 'src/app/features/Account/services/Account-edit-page.service';
import { AccountModule } from 'src/app/features/account/user.module';





@NgModule({
  declarations: [AccountEditPageComponent],
  imports: [
    CommonModule,
    AccountEditPageRoutingModule,
    FooterModule,
    HeaderModule,
    AccountModule,
  ],
  providers: [AccountEditPageService]
})
export class AccountEditPageModule { }
