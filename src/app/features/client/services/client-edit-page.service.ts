import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Client } from "../models/client";
import { ClientService } from "./client.service";

@Injectable()
export class ClientEditPageService
{

    constructor(
        private clientService:ClientService,
        private router:Router
        ) 
    { 

    }

    getClientById(id:string)
    {
        this.clientService.getById(id)
        .pipe(finalize(() => {  }))
        .subscribe(client => 
            {
                this.client = client;
                this.clientLoading = false
            })
    }

    saveChanges()
    {
        alert('saved!')
        this.router.navigate(['/clients/' + this.client.Id])
    }

    clientLoading:boolean = true;
    clientIdFromRouteParams:string;
    client:Client = new Client('', '', '', '', 0, [])

}