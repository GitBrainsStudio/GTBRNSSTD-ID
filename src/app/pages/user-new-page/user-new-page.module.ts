import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from 'src/app/features/footer/footer.module';
import { HeaderModule } from 'src/app/features/header/header.module';
import { ClientModule } from 'src/app/features/client/client.module';
import { ClientNewPageService } from 'src/app/features/client/services/client-new-page.service';
import { UserNewPageComponent } from './user-new-page.component';
import { UserNewPageRoutingModule } from './user-new-page-routing.module';





@NgModule({
  declarations: [UserNewPageComponent],
  imports: [
    CommonModule,
    UserNewPageRoutingModule,
    FooterModule,
    HeaderModule,
  ],
  providers: []
})
export class UserNewPageModule { }
