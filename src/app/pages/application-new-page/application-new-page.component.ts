import { Component, OnInit } from '@angular/core';
import { ApplicationNewPageService } from 'src/app/features/Application/services/Application-new-page.service';

@Component({
  selector: 'app-application-new-page',
  templateUrl: './application-new-page.component.html',
  styleUrls: ['./application-new-page.component.css']
})
export class ApplicationNewPageComponent implements OnInit {

  constructor(public pageService:ApplicationNewPageService) { }

  ngOnInit(): void {
  }


}
