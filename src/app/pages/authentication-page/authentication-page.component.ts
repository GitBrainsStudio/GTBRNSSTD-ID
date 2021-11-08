import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.redirect = params['redirect'];
    });
}

  ngOnInit(): void {
  }

  redirect:string = ""
  
}
