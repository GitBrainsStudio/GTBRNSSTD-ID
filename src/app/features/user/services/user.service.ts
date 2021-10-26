import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { of } from "rxjs"
import { delay } from "rxjs/operators";
import { Role } from "../models/role";
import { User } from "../models/user";

@Injectable()
export class UserService
{   
    constructor(private httpClient:HttpClient)
    {

    }

    getById(id:string) : Observable<User>
    {
        return of<User>(new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]))
    
    .pipe(delay(800));
    }

    getAll() : Observable<User[]>

    {
        return of<User[]>(
            
        [
            
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
            new User('C08CA4CE990F55DAE05400E000A92427', 'Administrator', [new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425')]),
        
        ]).pipe(delay(800));
    }
}