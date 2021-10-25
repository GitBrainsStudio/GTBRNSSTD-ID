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
        return of<Client>(new Client('C08CA4CE990F55DAE05400E000A92427', 'Блог', 'Приложения для возможности размещения инфо-постов с важной информацией', 'http://localhost:4200/blog')).pipe(delay(800));
    }
}