import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ID_API } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Program } from "../models/program";
import { AccountService } from "../../account/services/account.service";

@Injectable()
export class ProgramService
{   
    constructor(
        private httpClient:HttpClient,
        private accountService:AccountService)
    {

    }

    getById(programId:string) : Observable<Program>
    {
        return this.httpClient.get<Program>(ID_API + "programs/" + programId)
            .pipe(map((program:Program) => 
            {
                return new Program(program.Id, program.Description, program.URL, this.accountService.getAllByProgramId(program.Id), program.Roles)
            }))
    }

    getAllByAccountId(accountId:string) : Observable<Program[]>
    {
        return this.httpClient.get<Program[]>(ID_API + "accounts/" + accountId + "/programs/")
        .pipe(map((programs:Program[]) => programs.map((program:Program) => 
        {
            return new Program(program.Id, program.Description, program.URL, this.accountService.getAllByProgramId(program.Id), program.Roles)
        })))
    }

    getAll() : Observable<Program[]>
    {
        return this.httpClient.get<Program[]>(ID_API + "programs")
            .pipe(map((programs:Program[]) => programs.map((program:Program) => 
            {
                return new Program(program.Id, program.Description, program.URL, this.accountService.getAllByProgramId(program.Id), program.Roles)
            })))
    }

    create(program:Program) 
    {
        return this.httpClient.post<Program>(ID_API + "programs", program)
    }

    update(program:Program)
    {
        return this.httpClient.put<Program>(ID_API + "programs", program)
    }

    delete(programId:string)
    {
        return this.httpClient.delete<Program>(ID_API + "programs/" + programId)
    }

}