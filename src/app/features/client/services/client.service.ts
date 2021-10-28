import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { Client } from "../models/client";
import { of } from "rxjs"
import { Role } from "../../user/models/role";

@Injectable()
export class ClientService
{   
    constructor(private httpClient:HttpClient)
    {

    }

    getById(id:string) : Observable<Client>
    {
        return of<Client>(this._clients[0])
    }

    getAll() : Observable<Client[]>
    {
        return of<Client[]>(this._clients)
    }

    _clients:Client[] = [
        new Client("1", "Program 1", "Description 1", "http://localhost:8080/", 500, [ {
            Id : "1",
            Name: "User",
            Description: "Description",
            ProgramId: "1"
        }])]
}