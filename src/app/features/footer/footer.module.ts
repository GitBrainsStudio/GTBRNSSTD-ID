import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDefaultComponent } from './components/footer-default/footer-default.component';



@NgModule({
  declarations: [
    FooterDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterDefaultComponent
  ]
})
export class FooterModule { }
