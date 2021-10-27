import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/features/client/models/client';
import { ClientService } from 'src/app/features/client/services/client.service';
import { Role } from '../../models/role';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

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
