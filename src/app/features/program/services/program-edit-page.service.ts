import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { finalize } from "rxjs/operators";
import { Program } from "../models/program";
import { ProgramService } from "./program.service";

@Injectable()
export class ProgramEditPageService
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
        .pipe(finalize(() => {  }))
        .subscribe(program => 
            {
                this.program = program;
            },
            error => 
            {   
                this.router.navigate(['/'])
            })
    }

    saveChanges()
    {
        if (this.program.valid)
        {
            this.programService.update(this.program)
            .subscribe(response => {  this.router.navigate(['/programs/' + this.program.Id]) })
        }
        else
        {
            alert('Program is not valid')
        }
    
    }

    programIdFromRouteParams:string;
    program:Program = new Program('', '', '', of([]), [])
}