import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationEditPageComponent } from '../application-edit-page/application-edit-page.component';
import { ApplicationDetailsPageComponent } from './application-details-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ApplicationDetailsPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationsDetailsPageRoutingModule {}