import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, pipe } from "rxjs";
import { Client } from "../models/client";
import { of } from "rxjs"
import { delay } from "rxjs/operators";

@Injectable()
export class ClientService
{   
    constructor(private httpClient:HttpClient)
    {

    }

    getById(id:string) : Observable<Client>
    {
        return of<Client>(new Client('id', 'name', 'description', 'url')).pipe(delay(2000));
    }
}