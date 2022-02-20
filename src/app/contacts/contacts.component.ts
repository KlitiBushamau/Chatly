import { Component, OnInit } from '@angular/core';
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  faSearch = faSearch;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
