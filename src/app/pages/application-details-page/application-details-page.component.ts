import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationDetailsPageService } from 'src/app/features/Application/services/Application-details-page.service';

@Component({
  selector: 'app-application-details-page',
  templateUrl: './application-details-page.component.html',
  styleUrls: ['./application-details-page.component.css']
})
export class ApplicationDetailsPageComponent implements OnInit {

  constructor(public pageService:ApplicationDetailsPageService,
              private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getApplicationById(this.activatedRoute.snapshot.params['id'])
  }


  ngOnInit(): void {

  }

}
