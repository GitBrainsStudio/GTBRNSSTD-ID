export class Role
{
    Id:string
    Name:string
    Description:string
    ApplicationId:string

    constructor(id:string, name:string, description:string, applicationId:string)
    {
        this.Id = id
        this.Name = name
        this.Description = description
        this.ApplicationId = applicationId
    }
}