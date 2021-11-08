import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ID_API } from "src/environments/environment";
import { ProgramService } from "../../program/services/program.service";
import { Account } from "../models/account";

@Injectable()
export class AccountService
{   
    constructor(
        private httpClient:HttpClient)
    {

    }

    getById(accountId:string) : Observable<Account>
    {
        return this.httpClient.get<Account>(ID_API + "accounts/" + accountId)
            .pipe(map((account:Account) => {
                return new Account(account.Id, account.Login, account.Password, account.Roles)
            }))
    }

    getAll() : Observable<Account[]>
    {
        return this.httpClient.get<Account[]>(ID_API + "accounts")
    }

    getAllByProgramId(programId:string) : Observable<Account[]>
    {
        return this.httpClient.get<Account[]>(ID_API + "programs/" + programId + "/accounts/")
    }

    create(account:Account)
    {
        return this.httpClient.post<Account>(ID_API + "accounts", account)
    }

    update(account:Account)
    {
        return this.httpClient.put<Account>(ID_API + "accounts", account)
    }

    delete(accountId:string) 
    {
        return this.httpClient.delete(ID_API + "accounts/" + accountId)
    }

}

