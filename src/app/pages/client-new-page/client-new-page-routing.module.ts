import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientNewPageComponent } from './client-new-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ClientNewPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsNewPageRoutingModule {}