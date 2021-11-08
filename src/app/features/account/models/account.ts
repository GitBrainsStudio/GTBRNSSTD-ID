import { Observable } from "rxjs";
import { Program } from "../../program/models/program";
import { Role } from "./role";


export class Account
{
    Id:string;
    Login:string;
    Password:string;
    Roles:Role[];

    constructor(
        id:string,
        login:string,
        password:string,
        roles:Role[]
    )
    {
        this.Id = id
        this.Login = login
        this.Password = password
        this.Roles = roles
    }

    addRole(role:Role)
    {
        this.Roles.push(role)
    }

    removeRole(role:Role)
    {
        let roleIndex = this.Roles.findIndex(r => r.Id == role.Id)
        this.Roles.splice(roleIndex, 1);
    }

    get valid() : boolean
    {
        if (this.Id && this.Login && this.Password)
            return true
        return false;
    }
}