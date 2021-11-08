import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountEditPageComponent } from './account-edit-page.component';
import { AccountEditPageRoutingModule } from './account-edit-page-routing.module';
import { AccountModule } from 'src/app/features/account/account.module';
import { AccountEditPageService } from 'src/app/features/account/services/account-edit-page.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { AuthenticationModule } from 'src/app/features/authentication/authentication.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { FooterModule } from 'src/app/features/footer/footer.module';






@NgModule({
  declarations: [AccountEditPageComponent],
  imports: [
    CommonModule,
    AccountEditPageRoutingModule,
    AccountModule,
    HeaderModule,
    FooterModule
  ],
  providers: [AccountEditPageService]
})
export class AccountEditPageModule { }
