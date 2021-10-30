import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Account } from "../models/Account";
import { AccountService } from "./account.service";

@Injectable()
export class AccountDetailsPageService
{
    constructor(
        private accountService:AccountService,
        private router:Router
        ) {  }

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

    edit()
    {
        this.router.navigate(['/users/' + this.account.Id + '/edit'])
    }

    delete()
    {
        if (confirm("Are you sure to delete this account?")) {
            this.accountService.delete(this.account.Id)
            .subscribe(response => 
                {
                    this.router.navigate([''])
                })
          }
    }

    accountIdFromParams:string;
    account:Account = new Account('', '', '', [])
}