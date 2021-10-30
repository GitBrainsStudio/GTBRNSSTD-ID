import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() account:Account;
}
