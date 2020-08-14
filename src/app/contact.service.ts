import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map, tap } from 'rxjs/operators';

import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'api/contacts';  // URL to web api
  private apiURL = 'https://10.129.142.87:5001/api/contacts';
  //private apiURL = 'https://localhost:5001/api/contacts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
  	return this.http.get<Contact[]>(this.apiURL)
        .pipe(
        catchError(this.handleError<Contact[]>('getContacts', []))
        );
  }

  getContact(id: string): Observable<Contact> {
    const url = `${this.apiURL}/${id}`;
    console.log(url);
    return this.http.get<Contact>(url).pipe(
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updateContact(contact: Contact): Observable<any> {
    return this.http.put(this.apiURL, contact, this.httpOptions)
      .pipe(
      catchError(this.handleError<any>('updateContact'))
    );
  }

  addContact(contact: Contact): Observable<Contact> {
    console.log(contact);
    return this.http.post<Contact>(this.apiURL, contact, this.httpOptions)
    .pipe(
      catchError(this.handleError<Contact>('addContact'))
    );
  }

  deleteContact(contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.apiURL}/${id}`;

    return this.http.delete<Contact>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }

  searchContacts(term: string): Observable<Contact[]> {
    if (!term.trim()) {
      // if not search term, return empty Contact array.
      return of([]);
    }
    return this.http.get<Contact[]>(`${this.apiURL}/?name=${term}`).pipe(
      catchError(this.handleError<Contact[]>('searchContact', []))
    );
  }
}
