import { Observable } from "rxjs"
import { Client } from "../../client/models/client"

export class Role
{
    Id:string
    Name:string
    ProgramId:string
    Program:Observable<Client>

    constructor(id:string, name:string, programId:string)
    {
        this.Id = id
        this.Name = name
        this.ProgramId = programId
    }
}