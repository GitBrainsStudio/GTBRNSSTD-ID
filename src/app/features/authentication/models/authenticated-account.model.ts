export class AuthenticatedAccountModel
{
    login:string
    access_token:string

    constructor(login:string,access_token:string)
    {
        this.login = login
        this.access_token = access_token
    }
}