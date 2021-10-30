import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDetailsPageService } from 'src/app/features/Account/services/Account-details-page.service';

@Component({
  selector: 'app-account-details-page',
  templateUrl: './account-details-page.component.html',
  styleUrls: ['./account-details-page.component.css']
})
export class AccountDetailsPageComponent implements OnInit {

  constructor(public pageService:AccountDetailsPageService,
    private activatedRoute:ActivatedRoute,
) 
{ 
this.pageService.getAccountById(this.activatedRoute.snapshot.params['id'])
}


  ngOnInit(): void {
  }

}
