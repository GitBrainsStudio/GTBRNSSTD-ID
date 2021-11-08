import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { Program } from "../models/program";
import { ProgramService } from "./program.service";


@Injectable()
export class ProgramNewPageService
{
    constructor(
        private programService:ProgramService,
        private router:Router)
    {

    }

    save()
    {
        if (this.program.valid)
        {
            this.programService.create(this.program)
                .subscribe(v => this.router.navigate(['/']))
        }
        else
        {
            alert('Program is not valid')
        }
    }

    program:Program = new Program('', '', '', of([]), [])
}