import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './components/client/client.component';
import { ClientListComponent } from './components/client-list/client-list.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientComponent,
    ClientListComponent
  ]
})
export class ClientModule { }
