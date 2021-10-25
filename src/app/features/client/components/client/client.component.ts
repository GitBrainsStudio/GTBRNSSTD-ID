import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() client:Client;

}