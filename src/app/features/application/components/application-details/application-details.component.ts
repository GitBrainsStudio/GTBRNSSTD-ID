import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../../models/application';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() application:Application;
}
