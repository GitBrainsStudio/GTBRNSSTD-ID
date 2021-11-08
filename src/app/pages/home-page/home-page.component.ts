import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/features/account/models/account';
import { AccountService } from 'src/app/features/account/services/account.service';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
import { Program } from 'src/app/features/program/models/program';
import { ProgramService } from 'src/app/features/program/services/program.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public accountService:AccountService,
    public programService:ProgramService,
  ) {
   }
  ngOnInit(): void {
    this.getApplications()
    this.getAccounts()
  }


   programs:Program[]
   accounts:Account[]

   getApplications()
   {
      this.programService.getAll()
        .subscribe(programs => this.programs = programs, error => { })
   }

   getAccounts()
   {
    this.accountService.getAll()
    .subscribe(accounts => this.accounts = accounts, error => {  })
   }

}
