import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDefaultComponent } from './components/header-default/header-default.component';



@NgModule({
  declarations: [
    HeaderDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderDefaultComponent
  ]
})
export class HeaderModule { }
