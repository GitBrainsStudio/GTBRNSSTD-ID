import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/features/account/models/role';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';
import { Application } from '../../models/Application';

@Component({
  selector: 'app-application-form-roles-editor',
  templateUrl: './application-form-roles-editor.component.html',
  styleUrls: ['./application-form-roles-editor.component.css']
})
export class ApplicationFormRolesEditorComponent implements OnInit {

  constructor(private guidGenerationService:GuidGenerationService) { }

  ngOnInit(): void {
    this.initializeRole();
  }

  @Input() application:Application;
  role:Role

  addRole(role:Role)
  {
    this.application.addRole(role);
    this.initializeRole();
  }

  initializeRole()
  {
    this.role = new Role(this.guidGenerationService.newGuid, '', '', this.application.Id)
  }

}
