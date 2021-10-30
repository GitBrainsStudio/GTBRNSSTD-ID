import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationEditPageComponent } from './application-edit-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ApplicationEditPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationsEditPageRoutingModule {}