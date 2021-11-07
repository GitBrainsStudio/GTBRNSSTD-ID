import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() account:Account;
}
