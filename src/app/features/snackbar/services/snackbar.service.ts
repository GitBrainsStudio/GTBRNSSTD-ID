import { Injectable } from "@angular/core";

@Injectable()
export class SnackbarService
{
    opened:boolean = false;
    message:string = ""

    show(message:string)
    {
        if (!this.opened)
        {
            this.message = message;

            // Get the snackbar DIV
            var x = document.getElementById("snackbar");
    
            // Add the "show" class to DIV
            x.className = "show";
            this.opened = true;
    
             // After 3 seconds, remove the show class from DIV
            setTimeout(() => 
            {
                x.className = x.className.replace("show", ""); 
                this.opened = false;
            }, 3000)
        }
    }
}