import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountEditPageService } from 'src/app/features/account/services/account-edit-page.service';

@Component({
  selector: 'app-account-edit-page',
  templateUrl: './account-edit-page.component.html',
  styleUrls: ['./account-edit-page.component.scss']
})
export class AccountEditPageComponent implements OnInit {

  constructor(
    public pageService:AccountEditPageService,
    private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getAccountById(this.activatedRoute.snapshot.params['id'])
  }

  ngOnInit(): void {
  }

}
