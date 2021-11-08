export class Role
{
    Id:string
    Name:string
    Description:string
    ProgramId:string

    constructor(id:string, name:string, description:string, programId:string)
    {
        this.Id = id
        this.Name = name
        this.Description = description
        this.ProgramId = programId
    }
}