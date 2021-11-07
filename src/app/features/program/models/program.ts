import { Observable } from "rxjs";
import { Account } from "../../account/models/account";
import { Role } from "../../account/models/role";

export class Program
{
    Id:string;
    Description:string;
    URL:string;
    Accounts:Observable<Account[]>
    Roles:Role[]

    constructor(
        id:string,
        description:string,
        url:string,
        accounts:Observable<Account[]>,
        roles:Role[]
    )
    {
        this.Id = id
        this.Description = description
        this.URL = url
        this.Accounts = accounts
        this.Roles = roles
    }
    
    get valid() : boolean
    {
        if (
            this.Id.length == 0 ||
            this.Description.length == 0 || 
            this.Id.length == 0 || 
            this.Roles.length == 0)
            return false;
        return true
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
}