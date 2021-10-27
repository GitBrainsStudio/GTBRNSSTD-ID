import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { Client } from "../models/client";
import { of } from "rxjs"
import { delay } from "rxjs/operators";
import { Role } from "../../user/models/role";

@Injectable()
export class ClientService
{   
    constructor(private httpClient:HttpClient)
    {

    }

    getById(id:string) : Observable<Client>
    {
        return of<Client>(new Client('asdasd', 'asdasd', 'asdasd', 'asdasdasd', 11))
    }

    getAll() : Observable<Client[]>
    {
        let fakeRoles1:Role[] = [
            new Role('C08CA4CE990F55DAE05400E000A9243asdasd7', 'Administrator', 'C08CA4CE990F55DAE05400E000A92425'),
            new Role('C08CA4CE990F55DAE05400E00asdasd0A92432', 'User', 'C08CA4CE990F55DAE05400E000A92425'),
            new Role('C08CA4CE990F55DAE05400E0asdasdasd00A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92425'),
        ]

        let fakeRoles2:Role[] = [
            new Role('C08CA4CE990F55DAE05400E000A92437', 'Administrator', 'C08CA4CE990F55DAE05400E000A92423'),
            new Role('C08CA4CE990F55DAE05400E000A92432', 'User', 'C08CA4CE990F55DAE05400E000A92423'),
            new Role('C08CA4CE990F55DAE05400E000A92434', 'Moderator', 'C08CA4CE990F55DAE05400E000A92423'),
        ]

        let fakeClients:Client[] = [
            new Client('C08CA4CE990F55DAE05400E000A92421', 'Program 1', 'x', 'x', 10),
            new Client('C08CA4CE990F55DAE05400E000A92422', 'Program 2', 'x', 'x', 12),
            new Client('C08CA4CE990F55DAE05400E000A92423', 'Program 3', 'x', 'x', 44),
            new Client('C08CA4CE990F55DAE05400E000A92424', 'Program 4', 'x', 'x', 1),
            new Client('C08CA4CE990F55DAE05400E000A92425', 'Program 5', 'x', 'x', 2),
            new Client('C08CA4CE990F55DAE05400E000A92426', 'Program 6', 'x', 'x', 0),
        ]
        return of<Client[]>(
            fakeClients
            ).pipe(delay(800));
    }
}