import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/features/user/models/role';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-roles-editor',
  templateUrl: './client-roles-editor.component.html',
  styleUrls: ['./client-roles-editor.component.css']
})
export class ClientRolesEditorComponent implements OnInit {

  constructor(private guidGenerationService:GuidGenerationService) { }

  ngOnInit(): void {
    this.initializeRole();
  }

  @Input() client:Client;
  role:Role;
  

  addRole(role:Role)
  {
    this.client.addRole(role);
    this.initializeRole();
  }

  initializeRole()
  {
    this.role = new Role(this.guidGenerationService.newGuid, '', '', this.client.Id)
  }

}
