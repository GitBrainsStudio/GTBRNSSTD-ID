import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HeaderComponent {

  constructor(
    public authenticationService:AuthenticationService,
    private router:Router) { }

  logout()
  {
    if (confirm("Are you sure to logout?")) {
      this.authenticationService.logout();
      this.router.navigate(['/login'])
    }
  }

  onResize(event){
    this.innerWidth = event.target.innerWidth
  }

  
  innerWidth:number = window.innerWidth;
}
