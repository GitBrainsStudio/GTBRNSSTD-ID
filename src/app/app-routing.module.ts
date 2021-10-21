import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { ClientDetailsComponent } from './modules/client/client-details/client-details.component';
import { ClientEditComponent } from './modules/client/client-edit/client-edit.component';
import { ClientsComponent } from './modules/clients/clients.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'clients', component: ClientsComponent
  },
  {
    path: 'clients/:client_id', component: ClientDetailsComponent
  },
  {
    path: 'clients/:client_id/new', component: ClientEditComponent
  },
  {
    path: 'clients/:client_id/edit', component: ClientEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
