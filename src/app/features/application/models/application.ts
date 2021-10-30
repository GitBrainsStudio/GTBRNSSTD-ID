import { Role } from "../../account/models/role";

export class Application
{
    Id:string;
    Name:string;
    Description:string;
    URL:string;
    UsersCount:number
    Roles:Role[]

    constructor(
        id:string,
        name:string,
        description:string,
        url:string,
        usersCount:number,
        roles:Role[]
    )
    {
        this.Id = id
        this.Name = name
        this.Description = description
        this.URL = url
        this.UsersCount = usersCount
        this.Roles = roles
    }
    
    get valid() : boolean
    {
        if (
            this.Id.length == 0 || 
            this.Name.length == 0 || 
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