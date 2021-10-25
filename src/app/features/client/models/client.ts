export class Client
{
    Id:string;
    Name:string;
    Description:string;
    URL:string;

    constructor(
        id:string,
        name:string,
        description:string,
        url:string
    )
    {
        this.Id = id
        this.Name = name
        this.Description = description
        this.URL = url
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