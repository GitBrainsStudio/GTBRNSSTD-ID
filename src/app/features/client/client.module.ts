import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { BadgeModule } from '../badge/badge.module';

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BadgeModule
  ],
  exports: [
    ClientComponent,
    ClientListComponent,
    ClientDetailsComponent
  ],
  providers: [ClientService]
})
export class ClientModule { }
