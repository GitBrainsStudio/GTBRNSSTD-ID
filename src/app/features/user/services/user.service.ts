import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { of } from "rxjs"
import { delay } from "rxjs/operators";
import { User } from "../models/user";

@Injectable()
export class UserService
{   
    constructor(private httpClient:HttpClient)
    {

    }

    getById(id:string) : Observable<User>
    {
        return of<User>(new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator')).pipe(delay(800));
    }
}