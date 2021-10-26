import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {

  }

  @Input() user:User;

  clientFormAddingVisible:boolean = false;
}
