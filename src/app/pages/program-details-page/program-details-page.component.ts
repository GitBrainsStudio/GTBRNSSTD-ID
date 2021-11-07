import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramDetailsPageService } from 'src/app/features/program/services/program-details-page.service';

@Component({
  selector: 'app-program-details-page',
  templateUrl: './program-details-page.component.html',
  styleUrls: ['./program-details-page.component.scss']
})
export class ProgramDetailsPageComponent implements OnInit {

  constructor(public pageService:ProgramDetailsPageService,
    private activatedRoute:ActivatedRoute) 
  { 
  this.pageService.getProgramById(this.activatedRoute.snapshot.params['id'])
  }

  ngOnInit(): void {
  }

}
