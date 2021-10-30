import { Component, Input } from '@angular/core';
import { Account } from '../../models/Account';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {

  @Input() account:Account;
}
