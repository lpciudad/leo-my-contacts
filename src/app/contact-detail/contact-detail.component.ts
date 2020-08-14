import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
 	private location: Location,
 	private contactService: ContactService
  ) { }

  @Input() contact: Contact;

  ngOnInit(): void {
  	this.getContact();
  }

  getContact(): void {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.contactService.getContact(id)
  		.subscribe(contact => this.contact = contact);
  }

  goBack(): void {
  	this.location.back();
  }

  save(): void {
    this.contactService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(this.contact)
      .subscribe(() => this.goBack());
  }
}
