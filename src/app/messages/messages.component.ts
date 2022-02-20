import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  status: boolean = false;
  clickEvent(){
      this.status = !this.status; }
      
  faPaperPlane = faPaperPlane;

  constructor() { }

  ngOnInit(): void {
  }

}
