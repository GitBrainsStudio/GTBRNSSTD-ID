import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountNewPageComponent } from './account-new-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: AccountNewPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountNewPageRoutingModule {}