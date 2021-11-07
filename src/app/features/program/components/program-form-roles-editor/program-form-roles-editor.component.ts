import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/features/account/models/role';
import { GuidGenerationService } from 'src/app/shared/services/guid-generation.service';
import { Program } from '../../models/program';

@Component({
  selector: 'app-program-form-roles-editor',
  templateUrl: './program-form-roles-editor.component.html',
  styleUrls: ['./program-form-roles-editor.component.scss']
})
export class ProgramFormRolesEditorComponent implements OnInit {

  constructor(private guidGenerationService:GuidGenerationService) { }

  ngOnInit(): void {
    this.initializeRole();
  }

  @Input() program:Program;
  role:Role

  addRole(role:Role)
  {
    this.program.addRole(role);
    this.initializeRole();
  }

  initializeRole()
  {
    this.role = new Role(this.guidGenerationService.newGuid, '', '', this.program.Id)
  }

}
