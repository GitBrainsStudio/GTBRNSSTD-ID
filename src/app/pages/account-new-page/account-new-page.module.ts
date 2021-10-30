import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { AccountNewPageComponent } from './account-new-page.component';
import { AccountNewPageRoutingModule } from './account-new-page-routing.module';
import { AccountNewPageService } from 'src/app/features/Account/services/Account-new-page.service';
import { AccountModule } from 'src/app/features/account/user.module';





@NgModule({
  declarations: [AccountNewPageComponent],
  imports: [
    CommonModule,
    AccountNewPageRoutingModule,
    FooterModule,
    HeaderModule,
    AccountModule
  ],
  providers: [AccountNewPageService]
})
export class AccountNewPageModule { }
