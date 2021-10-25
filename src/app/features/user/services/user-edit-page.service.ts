import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { User } from "../models/user";
import { UserService } from "./user.service";

@Injectable()
export class UserEditPageService
{

    constructor(
        private userService:UserService,
        private router:Router
        ) 
    { 

    }

    getuserById(id:string)
    {
        this.userService.getById(id)
        .pipe(finalize(() => {  }))
        .subscribe(user => 
            {
                this.userLoadingMessage = "User was loaded successfully!"

                setTimeout(() => 
                {
                    this.user = user;
                    this.userLoading = false

                }, 1000)
            })
    }

    saveChanges()
    {
        alert('saved!')
        this.router.navigate(['/users/' + this.user.Id])
    }

    userLoadingMessage:string = "User loading..."
    userLoading:boolean = true;
    userIdFromRouteParams:string;
    user:User = new User('', '')

}