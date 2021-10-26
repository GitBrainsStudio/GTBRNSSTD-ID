import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/features/user/models/user';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-form-adding-in-user',
  templateUrl: './client-form-adding-in-user.component.html',
  styleUrls: ['./client-form-adding-in-user.component.css']
})
export class ClientFormAddingInUserComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.clientService.getAll()
      .subscribe(programs => { 

        this.programsTree = programs;  

        this.programsTree.forEach(program => 
          {
            program.Roles.forEach(role => 
              {
                if (this.user.Roles.some(userRole => userRole.Id == role.Id))
                {
                  role.check()
                }
              })
          })
      })
  }

  programsTree:Client[]

  @Input() user:User

}
