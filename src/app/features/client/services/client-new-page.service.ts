import { Injectable } from "@angular/core";
import { Client } from "../models/client";
import { ClientService } from "./client.service";

@Injectable()
export class ClientNewPageService
{
    constructor(private clientService:ClientService)
    {

    }

    save()
    {
        if (this.client.valid)
        {
         /*   this.clientService(this.client) */
        }
    }

    client:Client = new Client('', '', '', '', [])
}