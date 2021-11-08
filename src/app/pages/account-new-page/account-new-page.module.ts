import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountNewPageComponent } from './account-new-page.component';
import { AccountNewPageRoutingModule } from './account-new-page-routing.module';
import { AccountNewPageService } from 'src/app/features/account/services/account-new-page.service';
import { AccountModule } from 'src/app/features/account/account.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';





@NgModule({
  declarations: [AccountNewPageComponent],
  imports: [
    CommonModule,
    AccountNewPageRoutingModule,
    AccountModule,
    HeaderModule,
    FooterModule
  ],
  providers: [AccountNewPageService]
})
export class AccountNewPageModule { }
