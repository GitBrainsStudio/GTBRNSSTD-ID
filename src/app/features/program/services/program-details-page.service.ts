import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { finalize } from "rxjs/operators";
import { Program } from "../models/program";
import { ProgramService } from "./program.service";

@Injectable()
export class ProgramDetailsPageService
{
    constructor(
        private programService:ProgramService,
        private router:Router
        ) 
    { 

    }

    getProgramById(id:string)
    {
       
        this.programService.getById(id)
        .subscribe(program => 
            {
                this.program = program;
            },
            error => 
            {
                this.router.navigate(['/'])
            })
    }

    edit()
    {
        this.router.navigate(['/programs/' + this.program.Id + '/edit'])
    }

    delete()
    {
        if (confirm("Are you sure to delete this program?")) {
            this.programService.delete(this.program.Id)
            .subscribe(response => 
                {
                    this.router.navigate(['/'])
                })
          }

        
    }

    programIdFromRouteParams:string;
    program:Program = new Program('', '', '', of([]), [])
}