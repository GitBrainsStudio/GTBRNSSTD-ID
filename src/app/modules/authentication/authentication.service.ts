import { HttpClient } from "@angular/common/http";
import { AuthenticatedAccount } from "src/app/models/AuthenticatedAccount";
import { ID_API } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService
{
    constructor(private httpClient:HttpClient)
    {
        
    }

    get authenticatedAccount():AuthenticatedAccount | null
    {
        let accountFromLocalStorage = localStorage.getItem('authenticatedAccount')
        if (accountFromLocalStorage)
            return JSON.parse(accountFromLocalStorage)
        return null
    }

    authenticate(login:string, password:string)
    {
        let query = (ID_API + "auth?clientId=ez" );
        query += "&login=" + login;
        query += "&password=" + password;

        return this.httpClient.get<AuthenticatedAccount>(query).pipe(map((account:AuthenticatedAccount) =>
        {
            if (account?.login && account?.access_token)
            {
                localStorage.setItem('authenticatedAccount', JSON.stringify(account)); 
            }

        return account;  
        }));
    }

    logout() {

        localStorage.removeItem('authenticatedAccount'); 
    }
}