import { Role } from "./role";

export class AvailableProgram
{
    Id:string;
    Name:string;
    Roles:Role[];
    RoleSelectionFormOpened:boolean

    
    openRoleSelectionForm()
    {
        this.RoleSelectionFormOpened = true;
    }

    closeRoleSelectionForm()
    {
        this.RoleSelectionFormOpened = false;
    }



    constructor(id:string,name:string,roles:Role[])
    {
        this.Id = id
        this.Name = name
        this.Roles = roles
    }

}