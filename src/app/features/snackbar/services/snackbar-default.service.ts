import { Injectable } from "@angular/core";

export class SnackbarDefaultService
{
    message:string = ""
    className:string = ""
    visibility:boolean = false;

    showSnackBar(message:string)
    {
        if (this.visibility)
        {
            return;
        }

        this.visibility = true;
        this.message = message;
        this.className = "show";

        setTimeout(() => 
        {
            this.className = "";
            this.visibility = false;

        }, 2900);
    }
}