import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.client)
  }

  @Input() client:Client;
}
