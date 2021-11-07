import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountDetailsPageService } from 'src/app/features/account/services/account-details-page.service';

@Component({
  selector: 'app-account-details-page',
  templateUrl: './account-details-page.component.html',
  styleUrls: ['./account-details-page.component.scss']
})
export class AccountDetailsPageComponent implements OnInit {

  constructor(public pageService:AccountDetailsPageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.pageService.getAccountById(this.activatedRoute.snapshot.params['id'])
  }

}
