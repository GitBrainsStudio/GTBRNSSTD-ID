import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ClientComponent,
    ClientListComponent
  ],
  providers: [ClientService]
})
export class ClientModule { }
