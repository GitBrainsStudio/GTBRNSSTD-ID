import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SnackbarModule } from './modules/snackbar/snackbar.module';
import { ClientsModule } from './modules/clients/clients.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthenticationModule,
    AppRoutingModule,
    SnackbarModule,
    ClientsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
