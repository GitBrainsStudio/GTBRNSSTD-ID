import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientDetailsPageService } from 'src/app/features/client/services/client-details-page.service';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.css']
})
export class ClientDetailsPageComponent implements OnInit {

  constructor(public pageService:ClientDetailsPageService,
              private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getClientById(this.activatedRoute.snapshot.params['id'])
  }


  ngOnInit(): void {

  }

}
