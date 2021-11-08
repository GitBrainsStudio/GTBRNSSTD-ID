import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  logout()
  {
    if (confirm("Are you sure to logout?")) {
      this.authenticationService.logout();
      this.router.navigate(['/login'])
    }
  }
}
