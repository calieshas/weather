import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact.model';


@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
    @Input() contactD: Contact;

  constructor() { }

  ngOnInit() {
    // gets the selectedContact from contacts.component.html

    console.log('contact =' + this.contactD);
  }

}
