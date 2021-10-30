import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationNewPageComponent } from './application-new-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ApplicationNewPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationsNewPageRoutingModule {}