import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsPageService } from 'src/app/features/user/services/user-details-page.service';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit {

  constructor(public pageService:UserDetailsPageService,
    private activatedRoute:ActivatedRoute,
) 
{ 
this.pageService.getUserById(this.activatedRoute.snapshot.params['id'])
}


  ngOnInit(): void {
  }

}
