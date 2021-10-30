import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ID_API } from "src/environments/environment";
import { map } from "rxjs/operators";
import { Application } from "../models/application";

@Injectable()
export class ApplicationService
{   
    constructor(private httpApplication:HttpClient)
    {

    }

    getById(applicationId:string) : Observable<Application>
    {
        return this.httpApplication.get<Application>(ID_API + "applications/" + applicationId)
            .pipe(map((application:Application) => 
            {
                return new Application(application.Id, application.Name, application.Description, application.URL, application.UsersCount, application.Roles)
            }))
    }

    getAll() : Observable<Application[]>
    {
        return this.httpApplication.get<Application[]>(ID_API + "applications")
    }

    create(application:Application) 
    {
        return this.httpApplication.post<Application>(ID_API + "applications", application)
    }

    update(application:Application)
    {
        return this.httpApplication.put<Application>(ID_API + "applications", application)
    }

    delete(applicationId:string)
    {
        return this.httpApplication.delete<Application>(ID_API + "applications/" + applicationId)
    }

}