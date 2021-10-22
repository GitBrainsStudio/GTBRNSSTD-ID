import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarDefaultComponent } from './components/snackbar-default/snackbar-default.component';
import { SnackbarDefaultService } from './services/snackbar-default.service';



@NgModule({
  declarations: [
    SnackbarDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SnackbarDefaultComponent
  ],
  providers: [SnackbarDefaultService]
})
export class SnackbarModule { }
