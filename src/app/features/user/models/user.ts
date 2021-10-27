import { Client } from "../../client/models/client";
import { Role } from "./role";


export class User
{
    Id:string;
    Login:string;
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
        if (this.Id && this.Login)
            return true
        return false;
    }
}