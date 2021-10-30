import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationEditPageService } from 'src/app/features/Application/services/Application-edit-page.service';
import { ApplicationService } from 'src/app/features/Application/services/Application.service';

@Component({
  selector: 'app-application-edit-page',
  templateUrl: './application-edit-page.component.html',
  styleUrls: ['./application-edit-page.component.css']
})
export class ApplicationEditPageComponent implements OnInit {



  ngOnInit(): void {
  }
  
  constructor(
    public pageService:ApplicationEditPageService,
    private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getApplicationById(this.activatedRoute.snapshot.params['id'])
  }

  
}
