import { Component, OnInit } from '@angular/core';
import { ClientNewPageService } from 'src/app/features/client/services/client-new-page.service';

@Component({
  selector: 'app-client-new-page',
  templateUrl: './client-new-page.component.html',
  styleUrls: ['./client-new-page.component.css']
})
export class ClientNewPageComponent implements OnInit {

  constructor(public pageService:ClientNewPageService) { }

  ngOnInit(): void {
  }


}
