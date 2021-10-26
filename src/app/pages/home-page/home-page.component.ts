import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/features/client/models/client';
import { ClientService } from 'src/app/features/client/services/client.service';
import { User } from 'src/app/features/user/models/user';
import { UserService } from 'src/app/features/user/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

  constructor(
    public userService:UserService,
    public clientService:ClientService
  ) {
    this.clients$ = clientService.getAll()
    this.users$ = userService.getAll()
   }

   clients$:Observable<Client[]>
   users$:Observable<User[]>
}
