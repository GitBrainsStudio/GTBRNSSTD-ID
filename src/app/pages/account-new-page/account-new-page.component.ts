import { Component, OnInit } from '@angular/core';
import { AccountNewPageService } from 'src/app/features/account/services/account-new-page.service';

@Component({
  selector: 'app-account-new-page',
  templateUrl: './account-new-page.component.html',
  styleUrls: ['./account-new-page.component.scss']
})
export class AccountNewPageComponent implements OnInit {

  constructor(public pageService:AccountNewPageService) { }

  ngOnInit(): void {
  }

}
