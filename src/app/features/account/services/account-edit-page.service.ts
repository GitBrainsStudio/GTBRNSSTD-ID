import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Account } from "../models/Account";
import { AccountService } from "./Account.service";

@Injectable()
export class AccountEditPageService
{

    constructor(
        private accountService:AccountService,
        private router:Router
        ) 
    { 

    }

    getAccountById(id:string)
    {
        this.accountService.getById(id)
        .pipe(finalize(() => {  }))
        .subscribe(account => 
            {
                this.account = account;
            },
            error => 
            {
                this.router.navigate(['/'])
            })
    }

    saveChanges()
    {
        if (this.account.valid)
        {
            this.accountService.update(this.account)
                .subscribe(resposne => 
                    {
                        this.router.navigate(['/accounts/' + this.account.Id])
                    })
        }
    }

    accountIdFromRouteParams:string;
    account:Account = new Account('', '', '', [])
}