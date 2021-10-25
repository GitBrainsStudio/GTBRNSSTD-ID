import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./pages/authentication-page/authentication-page.module').then((m) => m.AuthenticationPageModule),
  },
  {
    path: 'clients',
    loadChildren: () => import('./pages/clients-page/clients-page.module').then((m) => m.ClientsPageModule),
  },
  {
    path: 'clients/new',
    loadChildren: () => import('./pages/client-new-page/client-new-page.module').then((m) => m.ClientsNewPageModule),
  },
 
  {
    path: 'clients/:id',
    loadChildren: () => import('./pages/client-details-page/client-details-page.module').then((m) => m.ClientsDetailsPageModule),
  },
  {
    path: 'clients/:id/edit',
    loadChildren: () => import('./pages/client-edit-page/client-edit-page.module').then((m) => m.ClientsEditPageModule),
  },
  {
    path: '**', redirectTo : 'clients' 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
