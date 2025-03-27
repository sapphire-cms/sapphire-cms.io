import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {ContactMessage} from './contact-form/contact-message';
import {ContactService} from './contact.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public sendingMessage = false;
  public messageSent = false;

  constructor(private readonly contactService: ContactService) {
  }

  public sendMessage(contactMessage: ContactMessage) {
    this.sendingMessage = true;
    this.contactService
      .send(contactMessage)
      .subscribe(() => {
        this.sendingMessage = false;
        this.messageSent = true;
      });
  }
}
