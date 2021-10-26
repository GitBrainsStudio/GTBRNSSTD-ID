import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserNewPageComponent } from '../user-new-page/user-new-page.component';
import { UserEditPageComponent } from './user-edit-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: UserEditPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserEditPageRoutingModule {}