import { Role } from "../../user/models/role";

export class Client
{
    Id:string;
    Name:string;
    Description:string;
    URL:string;
    Roles:Role[]
    UsersCount:number

    constructor(
        id:string,
        name:string,
        description:string,
        url:string,
        roles:Role[],
        usersCount:number
    )
    {
        this.Id = id
        this.Name = name
        this.Description = description
        this.URL = url
        this.Roles = roles
        this.UsersCount = usersCount
    }
    
    get valid() : boolean
    {
        if (
            this.Id.length == 0 || 
            this.Name.length == 0 || 
            this.Description.length == 0 || 
            this.Id.length == 0)
            return false;
        return true
    }
}