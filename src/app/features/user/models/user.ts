import { Client } from "../../client/models/client";
import { Role } from "./role";


export class User
{
    Id:string;
    Login:string;
    AccessedPrograms:Client[]
    Roles:Role[];


    constructor(
        id:string,
        login:string,
        roles:Role[]
    )
    {
        this.Id = id
        this.Login = login
        this.Roles = roles
    }

    openAccessToTheProgram(program:Client, role:Role)
    {
        this.AccessedPrograms.push(program)
    }

    closeAccessToTheProgram(program:Client)
    {
        let programIndex = this.AccessedPrograms.findIndex((p) => p.Id == program.Id)
        this.AccessedPrograms.splice(programIndex, 1)
    }
    

    get valid() : boolean
    {
        if (this.Id && this.Login)
            return true
        return false;
    }
}