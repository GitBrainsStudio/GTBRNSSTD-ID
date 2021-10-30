import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Application } from "../models/application";
import { ApplicationService } from "./application.service";

@Injectable()
export class ApplicationDetailsPageService
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

    edit()
    {
        this.router.navigate(['/clients/' + this.application.Id + '/edit'])
    }

    delete()
    {
        if (confirm("Are you sure to delete this application?")) {
            this.applicationService.delete(this.application.Id)
            .subscribe(response => 
                {
                    this.router.navigate([''])
                })
          }

        
    }

    applicationIdFromRouteParams:string;
    application:Application = new Application('', '', '', '', 0, [])
}