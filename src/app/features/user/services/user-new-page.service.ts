import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { User } from "../models/user";
import { UserService } from "./user.service";

@Injectable()
export class UserNewPageService
{

    constructor(
        private userService:UserService,
        private router:Router
        ) 
    { 

    }

    save()
    {
        if (this.user.valid)
        {
            alert('saved!')
        }
    }

    userLoading:boolean = true;
    userIdFromRouteParams:string;
    user:User = new User('', '', [])
}