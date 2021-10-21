import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private snackBarService:SnackbarService) { }

  ngOnInit(): void {
  }
  
  login()
  {
    this.snackBarService.showSnackBar('Добро пожаловать в экосистему GitBrainsStudio')
  }
}
