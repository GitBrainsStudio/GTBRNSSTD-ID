import { Injectable } from "@angular/core";
import { GuidGenerationService } from "src/app/shared/services/guid-generation.service";
import { Application } from "../models/application";
import { ApplicationService } from "./application.service";

@Injectable()
export class ApplicationNewPageService
{
    constructor(
        private applicationService:ApplicationService,
        private guidGenerationService:GuidGenerationService)
    {

    }

    save()
    {
        if (this.application.valid)
        {
            this.applicationService.create(this.application)
                .subscribe(v => alert(v))
        }
    }

    application:Application = new Application(this.guidGenerationService.newGuid, '', '', '', 0, [])
}