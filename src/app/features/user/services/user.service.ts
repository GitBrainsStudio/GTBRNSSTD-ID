import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class UserService
{   
    constructor(
        private httpClient:HttpClient)
    {

    }

    getById(id:string) : Observable<User>
    {


    }

    getAll() : Observable<User[]>
    {
        
    }

}

