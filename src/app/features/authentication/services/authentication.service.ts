import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ID_API } from "src/environments/environment";
import { AuthenticatedAccountDto } from "../dtos/authenticated-account-dto";



@Injectable({providedIn:"root"})
export class AuthenticationService
{
    private authenticatedAccountLocalStorageTitle = 'authenticated_account'
    private systemAccountSubject: BehaviorSubject<AuthenticatedAccountDto>;

    constructor(private http:HttpClient, private router:Router)
    {
        this.systemAccountSubject = new BehaviorSubject<AuthenticatedAccountDto>(JSON.parse(localStorage.getItem(this.authenticatedAccountLocalStorageTitle)));
    }

    public get authenticatedAccount(): AuthenticatedAccountDto {
        return this.systemAccountSubject.value;
    }

    
    authenticate(login:string,password:string,) : Observable<AuthenticatedAccountDto>
    {
        return this.http.get<AuthenticatedAccountDto>(
            ID_API + "authenticate?login=" + login + "&password=" + password + "&programId=ID")
            .pipe(map((account:AuthenticatedAccountDto) =>
        {
            if (account?.account.login && account?.access_token)
            {
                localStorage.setItem(this.authenticatedAccountLocalStorageTitle, JSON.stringify(account));
                this.systemAccountSubject.next(account);  
            }

        return account;  
        }));
    }

    logout() {
        localStorage.removeItem(this.authenticatedAccountLocalStorageTitle);
        this.systemAccountSubject.next(null);
    }
}
