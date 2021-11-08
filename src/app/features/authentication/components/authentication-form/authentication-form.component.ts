import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss'],
})
export class AuthenticationFormComponent {

  constructor(
    public authenticationService:AuthenticationService,
    private router:Router) { }
  

  authenticate()
  { 
    this.authenticationService.authenticate(this.login, this.password)
      .subscribe(r => {  
        if (this.redirect)
          this.router.navigateByUrl(this.redirect)
        else this.router.navigate(['/']) 
      })
  }

  login:string = ""
  password:string = ""

  @Input() redirect:string
  
}
