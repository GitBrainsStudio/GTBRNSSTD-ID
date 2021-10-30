import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/features/Application/models/Application';
import { ApplicationService } from 'src/app/features/Application/services/Application.service';
import { Account } from 'src/app/features/Account/models/Account';
import { AccountService } from 'src/app/features/Account/services/Account.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit  {

  constructor(
    public accountService:AccountService,
    public applicationService:ApplicationService
  ) {
   }
  ngOnInit(): void {
    this.getApplications()
    this.getAccounts()
  }


   applications:Application[]
   accounts:Account[]

   getApplications()
   {
      this.applicationService.getAll()
        .subscribe(applications => this.applications = applications, error => { this.applications = []})
   }

   getAccounts()
   {
    this.accountService.getAll()
    .subscribe(accounts => this.accounts = accounts, error => { this.accounts = []})
   }
}
