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
        
    }

    getAll() : Observable<Client[]>
    {
        
    }
}