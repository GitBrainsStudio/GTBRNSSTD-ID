import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/features/Application/models/Application';
import { ApplicationService } from 'src/app/features/Application/services/Application.service';
import { Account } from '../../models/Account';
import { Role } from '../../models/role';

@Component({
  selector: 'app-account-form-roles-editor',
  templateUrl: './account-form-roles-editor.component.html',
  styleUrls: ['./account-form-roles-editor.component.css']
})
export class AccountFormRolesEditorComponent implements OnInit {

  constructor(public applicationService:ApplicationService) {
    this.applications$ = applicationService.getAll();
  }

ngOnInit(): void {

}

@Input() account:Account;
applications$:Observable<Application[]>
selectedApplication:Application

accountHasRole(role:Role) : boolean
{
   return this.account.Roles.some(r => r.Id == role.Id)
}
}
