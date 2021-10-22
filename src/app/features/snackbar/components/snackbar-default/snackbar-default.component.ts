import { Component, OnInit } from '@angular/core';
import { SnackbarDefaultService } from '../../services/snackbar-default.service';

@Component({
  selector: 'app-snackbar-default',
  templateUrl: './snackbar-default.component.html',
  styleUrls: ['./snackbar-default.component.css']
})
export class SnackbarDefaultComponent implements OnInit {

  constructor(public shanckBarService:SnackbarDefaultService) { }

  ngOnInit(): void {
  }

}
