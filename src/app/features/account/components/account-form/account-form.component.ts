import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() account:Account;
}
