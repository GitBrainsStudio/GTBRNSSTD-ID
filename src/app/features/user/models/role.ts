export class Role
{
    Id:string
    Name:string
    Checked:boolean
    ProgramId:string

    check()
    {
        this.Checked = true
    }

    constructor(id:string, name:string, programId:string)
    {
        this.Id = id
        this.Name = name
        this.ProgramId = programId
        this.Checked = false;
    }
}