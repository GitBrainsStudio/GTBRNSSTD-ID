import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
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

        return of<User>(this._users[0])
    }

    getAll() : Observable<User[]>
    {
        return of <User[]>(this._users)
    }

    _users:User[] = [
        new User("1", "Jack", [ {
            Id : "1",
            Name: "User",
            Description: "Description",
            ProgramId: "1"
        }])]
}

