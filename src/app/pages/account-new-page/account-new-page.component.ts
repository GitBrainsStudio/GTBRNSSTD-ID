import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountNewPageService } from 'src/app/features/Account/services/Account-new-page.service';

@Component({
  selector: 'app-account-new-page',
  templateUrl: './account-new-page.component.html',
  styleUrls: ['./account-new-page.component.css']
})
export class AccountNewPageComponent implements OnInit {

  ngOnInit(): void {
  }
  
  constructor(
    public pageService:AccountNewPageService
    ) 
  { 
      
  }

}
