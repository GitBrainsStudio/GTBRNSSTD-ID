import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramEditPageService } from 'src/app/features/program/services/program-edit-page.service';

@Component({
  selector: 'app-program-edit-page',
  templateUrl: './program-edit-page.component.html',
  styleUrls: ['./program-edit-page.component.scss']
})
export class ProgramEditPageComponent implements OnInit {

  constructor(
    public pageService:ProgramEditPageService,
    private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getProgramById(this.activatedRoute.snapshot.params['id'])
  }

  ngOnInit(): void {
  }

}
