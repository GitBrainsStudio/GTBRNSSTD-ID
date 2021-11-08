import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../../models/program';

@Component({
  selector: 'app-program-details',
  templateUrl: './program-details.component.html',
  styleUrls: ['./program-details.component.scss']
})
export class ProgramDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() program:Program;
}
