import { Component, Input } from '@angular/core';
import { Application } from '../../models/Application';

@Component({
  selector: 'app-application',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationComponent  {


  @Input() application:Application;

}
