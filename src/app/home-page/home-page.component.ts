import {Component} from '@angular/core';
import {MainHeroComponent} from '../main-hero/main-hero.component';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {ContactService} from '../contact.service';
import {ContactMessage} from '../contact-form/contact-message';
import {SubscribeFormComponent} from '../subscribe-form/subscribe-form.component';
import {ArgumentComponent} from '../argument/argument.component';
import {CmsFeatureComponent} from '../cms-feature/cms-feature.component';
import {feature} from "../generated/cms/feature";
import {argument} from "../generated/cms/argument";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainHeroComponent,
    ContactFormComponent,
    SubscribeFormComponent,
    ArgumentComponent,
    CmsFeatureComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  protected readonly argument = argument;
  protected readonly feature = feature;

  protected contactShown = false;
  protected sendingMessage = false;
  protected messageSent = false;

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
