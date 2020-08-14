import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  selectedContact : Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(): void {
  console.log("Get Contacts()")
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  deleteContact(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactService.deleteContact(contact)
      .subscribe();
  }
}
