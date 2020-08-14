import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact : Contact;
  constructor(
  	private route: ActivatedRoute,
   	private location: Location,
   	private contactService: ContactService
  ) { }

  ngOnInit(): void {

  }

  goBack(): void {
  	//this.location.back();
    this.location.go('/contacts', '', null);
  }
  
  addContact(name: string, phoneNumber: string, emailAddress: string, birthday: string): void {
    name = name.trim();
    phoneNumber = phoneNumber.trim();
    emailAddress = emailAddress.trim();
    birthday = birthday.trim();

    if (!name || !phoneNumber || !emailAddress || !birthday) { 
      console.log("Incorrect Value!")
      return; 
    }

    this.contactService.addContact( { name, phoneNumber, emailAddress, birthday } as Contact)
      .subscribe(() => this.goBack());
  }
}
