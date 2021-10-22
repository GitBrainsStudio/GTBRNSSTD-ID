import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditPageComponent } from './client-edit-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ClientEditPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsEditPageRoutingModule {}