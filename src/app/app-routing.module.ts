import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./pages/authentication-page/authentication-page.module').then((m) => m.AuthenticationPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
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
    path: 'users/new',
    loadChildren: () => import('./pages/user-new-page/user-new-page.module').then((m) => m.UserNewPageModule),
  },
 
  {
    path: 'users/:id',
    loadChildren: () => import('./pages/user-details-page/user-details-page.module').then((m) => m.UserDetailsPageModule),
  },
  {
    path: 'users/:id/edit',
    loadChildren: () => import('./pages/user-edit-page/user-edit-page.module').then((m) => m.UserEditPageModule),
  },

  {
    path: '**', redirectTo : '' 
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
