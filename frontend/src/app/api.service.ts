import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API = 'http://localhost:';
  constructor(private http: HttpClient) {}

  storeContact(data: Contact): Observable<Contact[]>
  {
    return this.http.post<Contact[]>(this.API + 'contact', data);
  }
}
