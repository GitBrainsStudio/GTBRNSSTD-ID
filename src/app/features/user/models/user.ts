import { Role } from "./role";


export class User
{
    Id:string;
    Login:string;
    Roles:Role[]

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
        if (!this.Roles.some(r => r.Id == role.Id))
            this.Roles.push(role)
    }
    

    removeRole(role:Role)
    {
        let index = this.Roles.findIndex(r => r.Id == role.Id)
        this.Roles.splice(index, 1)
    }

    updateRole(role:Role)
    {
        if (role.Checked)
            this.addRole(role)
        else this.removeRole(role)
    }

    get valid() : boolean
    {
        if (this.Id && this.Login)
            return true
        return false;
    }
}