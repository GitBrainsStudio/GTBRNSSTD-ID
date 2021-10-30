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
/* 
  {
    path: 'applications/new',
    loadChildren: () => import('./pages/application-new-page/application-new-page.module').then((m) => m.ApplicationsNewPageModule),
  }, */
 
  /* {
    path: 'applications/:id',
    loadChildren: () => import('./pages/application-details-page/application-details-page.module').then((m) => m.ApplicationsDetailsPageModule),
  },
  {
    path: 'applications/:id/edit',
    loadChildren: () => import('./pages/application-edit-page/application-edit-page.module').then((m) => m.ApplicationsEditPageModule),
  },

  {
    path: 'accounts/new',
    loadChildren: () => import('./pages/account-new-page/account-new-page.module').then((m) => m.AccountNewPageModule),
  }, 
 
  {
    path: 'accounts/:id',
    loadChildren: () => import('./pages/account-details-page/account-details-page.module').then((m) => m.AccountDetailsPageModule),
  },
  {
    path: 'accounts/:id/edit',
    loadChildren: () => import('./pages/account-edit-page/account-edit-page.module').then((m) => m.AccountEditPageModule),
  }, 
  {
    path: '**', redirectTo : '' 
  } */
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
