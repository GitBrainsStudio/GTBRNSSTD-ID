import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./pages/authentication-page/authentication-page.module').then((m) => m.AuthenticationPageModule),
  },

  {
    path: 'programs/new',
    loadChildren: () => import('./pages/program-new-page/program-new-page.module').then((m) => m.ProgramNewPageModule),
  },
 
  {
    path: 'programs/:id',
    loadChildren: () => import('./pages/program-details-page/program-details-page.module').then((m) => m.ProgramDetailsPageModule),
  },
  {
    path: 'programs/:id/edit',
    loadChildren: () => import('./pages/program-edit-page/program-edit-page.module').then((m) => m.ProgramEditPageModule),
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
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
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
