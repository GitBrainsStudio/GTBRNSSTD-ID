import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramDetailsPageComponent } from './program-details-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ProgramDetailsPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProgramDetailsPageRoutingModule {}