import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from 'src/app/features/program/models/program';
import { ProgramService } from 'src/app/features/program/services/program.service';
import { Account } from '../../models/account';
import { Role } from '../../models/role';

@Component({
  selector: 'app-account-form-roles-editor',
  templateUrl: './account-form-roles-editor.component.html',
  styleUrls: ['./account-form-roles-editor.component.scss']
})
export class AccountFormRolesEditorComponent implements OnInit {

  constructor(public programService:ProgramService) {
    this.programs$ = programService.getAll();
  }

  ngOnInit(): void {

  }

  @Input() account:Account;
  programs$:Observable<Program[]>
  selectedProgram:Program

  accountHasRole(role:Role) : boolean
  {
    return this.account.Roles.some(r => r.Id == role.Id)
  }

}


