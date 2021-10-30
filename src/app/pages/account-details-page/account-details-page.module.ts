import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { AccountDetailsPageComponent } from './account-details-page.component';
import { AccountDetailsPageRoutingModule } from './account-details-page-routing.module';
import { AccountDetailsPageService } from 'src/app/features/Account/services/Account-details-page.service';
import { AccountModule } from 'src/app/features/account/user.module';





@NgModule({
  declarations: [AccountDetailsPageComponent],
  imports: [
    CommonModule,
    AccountDetailsPageRoutingModule,
    FooterModule,
    HeaderModule,
    AccountModule
  ],
  providers: [AccountDetailsPageService]
})
export class AccountDetailsPageModule { }
