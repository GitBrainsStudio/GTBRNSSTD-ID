import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserEditPageService } from 'src/app/features/user/services/user-edit-page.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  
  ngOnInit(): void {
  }
  
  constructor(
    public pageService:UserEditPageService,
    private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getuserById(this.activatedRoute.snapshot.params['id'])
  }


}
