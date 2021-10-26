import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserNewPageService } from 'src/app/features/user/services/user-new-page.service';

@Component({
  selector: 'app-user-new-page',
  templateUrl: './user-new-page.component.html',
  styleUrls: ['./user-new-page.component.css']
})
export class UserNewPageComponent implements OnInit {

  ngOnInit(): void {
  }
  
  constructor(
    public pageService:UserNewPageService
    ) 
  { 
      
  }

}
