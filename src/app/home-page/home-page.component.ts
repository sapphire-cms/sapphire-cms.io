import { Component } from '@angular/core';
import {MainHeroComponent} from '../main-hero/main-hero.component';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {ContactService} from '../contact.service';
import {ContactMessage} from '../contact-form/contact-message';
import {SubscribeFormComponent} from '../subscribe-form/subscribe-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainHeroComponent,
    ContactFormComponent,
    SubscribeFormComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public contactShown = false;
  public sendingMessage = false;
  public messageSent = false;

  constructor(private readonly contactService: ContactService) {
  }

  public subscribe(email: string) {
    this.sendMessage({
      email,
      contactName: 'Anonymous',
      message: 'Sapphire CMS - I want to join wishlist.'
    });
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
