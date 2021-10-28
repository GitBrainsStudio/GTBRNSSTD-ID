import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/features/client/models/client';
import { ClientService } from 'src/app/features/client/services/client.service';
import { Role } from '../../models/role';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-roles-editor',
  templateUrl: './user-roles-editor.component.html',
  styleUrls: ['./user-roles-editor.component.css']
})
export class UserRolesEditorComponent implements OnInit {

  constructor(public clientService:ClientService) {
    this.clients$ = clientService.getAll();
  }

ngOnInit(): void {

}

@Input() user:User;
clients$:Observable<Client[]>
selectedProgram:Client

userHasRole(role:Role) : boolean
{
   return this.user.Roles.some(r => r.Id == role.Id)
}
}
