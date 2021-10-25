import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientEditPageService } from 'src/app/features/client/services/client-edit-page.service';
import { ClientService } from 'src/app/features/client/services/client.service';

@Component({
  selector: 'app-client-edit-page',
  templateUrl: './client-edit-page.component.html',
  styleUrls: ['./client-edit-page.component.css']
})
export class ClientEditPageComponent implements OnInit {



  ngOnInit(): void {
  }
  
  constructor(
    public pageService:ClientEditPageService,
    private activatedRoute:ActivatedRoute,
    ) 
  { 
      this.pageService.getClientById(this.activatedRoute.snapshot.params['id'])
  }


}
