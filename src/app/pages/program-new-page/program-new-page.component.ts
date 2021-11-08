import { Component, OnInit } from '@angular/core';
import { ProgramNewPageService } from 'src/app/features/program/services/program-new-page.service';

@Component({
  selector: 'app-program-new-page',
  templateUrl: './program-new-page.component.html',
  styleUrls: ['./program-new-page.component.scss']
})
export class ProgramNewPageComponent implements OnInit {

  constructor(public pageService:ProgramNewPageService) { }

  ngOnInit(): void {
  }

}
