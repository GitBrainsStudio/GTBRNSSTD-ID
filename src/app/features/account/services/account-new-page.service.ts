import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { GuidGenerationService } from "src/app/shared/services/guid-generation.service";
import { Account } from "../models/Account";
import { AccountService } from "./Account.service";

@Injectable()
export class AccountNewPageService
{

    constructor(
        private accountService:AccountService,
        private router:Router,
        private guidGenerationService:GuidGenerationService,
        ) 
    { 

    }

    save()
    {
        if (this.account.valid)
        {
            this.accountService.create(this.account)
                .subscribe(response => 
                    {
                        this.router.navigate['/accounts/' + this.account.Id]
                    })
        }
        else
        {
            alert('Пользователь не валиден')
        }
    }

    accountIdFromRouteParams:string;
    account:Account = new Account(this.guidGenerationService.newGuid, '', '', [])
}