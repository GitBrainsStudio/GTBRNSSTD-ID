import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { User } from "../models/user";
import { UserService } from "./user.service";

@Injectable()
export class UserDetailsPageService
{
    constructor(
        private userService:UserService,
        private router:Router
        ) {  }

    getUserById(id:string)
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

    edit()
    {
        this.router.navigate(['/users/' + this.user.Id + '/edit'])
    }

    userLoadingMessage:string = "User loading..."
    userLoading:boolean = true;
    userIdFromParams:string;
    user:User = new User('', '', [])
}