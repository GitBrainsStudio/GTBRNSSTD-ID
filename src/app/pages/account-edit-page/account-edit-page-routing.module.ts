import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountNewPageComponent } from '../account-new-page/account-new-page.component';
import { AccountEditPageComponent } from './account-edit-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: AccountEditPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountEditPageRoutingModule {}