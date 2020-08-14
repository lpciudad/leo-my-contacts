import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
        {
          id: 1,
          name: 'Contact 1',
          phoneNumber: '091111111111',
          emailAddress: 'email1@mail.com',
          birthday: '1997-07-01'
          },
          {
            id: 2,
            name: 'Contact 2',
          phoneNumber: '091111111112',
          emailAddress: 'email2@mail.com',
          birthday: '1997-07-02'
          },
        {
            id: 3,
            name: 'Contact 3',
          phoneNumber: '091111111113',
          emailAddress: 'email3@mail.com',
          birthday: '1997-07-03'
          },
          {
            id: 4,
            name: 'Contact 4',
          phoneNumber: '091111111114',
          emailAddress: 'email4@mail.com',
          birthday: '1997-07-04'
          },
        {
            id: 5,
            name: 'Contact 5',
          phoneNumber: '091111111115',
          emailAddress: 'email5@mail.com',
          birthday: '1997-07-05'
          },
          {
            id: 6,
            name: 'Contact 6',
          phoneNumber: '091111111116',
          emailAddress: 'email6@mail.com',
          birthday: '1997-07-06'
          },
        {
            id: 7,
            name: 'Contact 7',
          phoneNumber: '091111111117',
          emailAddress: 'email7@mail.com',
          birthday: '1997-07-07'
          },
          {
            id: 8,
            name: 'Contact 8',
          phoneNumber: '091111111118',
          emailAddress: 'email8@mail.com',
          birthday: '1997-07-08'
          }    
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a contact always has an id.
  // If the contacts array is empty,
  // the method below returns the initial number (11).
  // if the contacts array is not empty, the method below returns the highest
  // contacts id + 1.
  //genId(contacts: Contact[]): number {
    //return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  //}
}
