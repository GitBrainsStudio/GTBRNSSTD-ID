import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditPageComponent } from '../client-edit-page/client-edit-page.component';
import { ClientDetailsPageComponent } from './client-details-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ClientDetailsPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsDetailsPageRoutingModule {}