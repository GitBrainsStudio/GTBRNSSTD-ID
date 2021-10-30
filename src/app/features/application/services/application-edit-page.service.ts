import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Application } from "../models/application";
import { ApplicationService } from "./application.service";

@Injectable()
export class ApplicationEditPageService
{
    constructor(
        private applicationService:ApplicationService,
        private router:Router
        ) 
    { 

    }

    getApplicationById(id:string)
    {
        this.applicationService.getById(id)
        .pipe(finalize(() => {  }))
        .subscribe(application => 
            {
                this.application = application;
            },
            error => 
            {
                this.router.navigate([''])
            })
    }

    saveChanges()
    {
        this.applicationService.update(this.application)
            .subscribe(response => {  this.router.navigate(['/clients/' + this.application.Id]) })
       
    }

    applicationIdFromRouteParams:string;
    application:Application = new Application('', '', '', '', 0, [])
}