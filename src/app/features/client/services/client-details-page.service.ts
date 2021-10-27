import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { Client } from "../models/client";
import { ClientService } from "./client.service";

@Injectable()
export class ClientDetailsPageService
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
                this.clientLoadingMessage = "Client was loaded successfully!"

                setTimeout(() => 
                {
                    this.client = client;
                    this.clientLoading = false

                }, 1000)
            })
    }

    edit()
    {
        this.router.navigate(['/clients/' + this.client.Id + '/edit'])
    }

    clientLoadingMessage:string = "Client loading..."
    clientLoading:boolean = true;
    clientIdFromRouteParams:string;
    client:Client = new Client('', '', '', '', 1)
}