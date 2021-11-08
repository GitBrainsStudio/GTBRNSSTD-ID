import { Component, Input, OnInit } from '@angular/core';
import { Program } from '../../models/program';

@Component({
  selector: 'app-program-form',
  templateUrl: './program-form.component.html',
  styleUrls: ['./program-form.component.scss']
})
export class ProgramFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() program:Program;
}
