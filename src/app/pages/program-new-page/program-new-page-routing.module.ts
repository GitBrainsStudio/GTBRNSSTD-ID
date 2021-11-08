import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramNewPageComponent } from './program-new-page.component';


const routes: Routes = [
    
    { 
        path: '', 
        component: ProgramNewPageComponent 
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProgramNewPageRoutingModule {}