import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API = 'http://127.0.0.1:3333/';
  constructor(private http: HttpClient) {}

  storeContact(data: Contact): Observable<Contact[]>
  {
    return this.http.post<Contact[]>(this.API + 'contact', data);
  }

  getContact(): Observable<Contact[]>
  {
    return this.http.get<Contact[]>(this.API + 'contact');
  }

}
