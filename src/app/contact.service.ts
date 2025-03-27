import { Injectable } from '@angular/core';
import {Functions, httpsCallableData} from '@angular/fire/functions';
import {Observable} from 'rxjs';
import {ContactMessage} from './contact-form/contact-message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private readonly fireFunctions: Functions) {
  }

  public send(message: ContactMessage): Observable<void> {
    return httpsCallableData<ContactMessage, void>(this.fireFunctions, 'contact')(message);
  }
}
