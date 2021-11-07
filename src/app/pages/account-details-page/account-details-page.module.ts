import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountDetailsPageComponent } from './account-details-page.component';
import { AccountDetailsPageRoutingModule } from './account-details-page-routing.module';
import { AccountModule } from 'src/app/features/account/account.module';
import { AccountDetailsPageService } from 'src/app/features/account/services/account-details-page.service';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';





@NgModule({
  declarations: [AccountDetailsPageComponent],
  imports: [
    CommonModule,
    AccountDetailsPageRoutingModule,
    AccountModule,
    HeaderModule,
    FooterModule
  ],
  providers: [AccountDetailsPageService]
})
export class AccountDetailsPageModule { }
