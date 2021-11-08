
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarService} from './services/snackbar.service';

@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SnackbarComponent
  ],
  providers: [SnackbarService,]
})
export class SnackbarModule { }
