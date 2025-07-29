import { Component } from '@angular/core';
import {MainHeroComponent} from '../main-hero/main-hero.component';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {ContactService} from '../contact.service';
import {ContactMessage} from '../contact-form/contact-message';
import {SubscribeFormComponent} from '../subscribe-form/subscribe-form.component';
import {environmentAgnostic_default} from '../generated/cms/argument/environment-agnostic/default';
import {trulyHeadless_default} from '../generated/cms/argument/truly-headless/default';
import {modularHackable_default} from '../generated/cms/argument/modular-hackable/default';
import {lowCode_default} from '../generated/cms/argument/low-code/default';
import {futureFirstFeatures_default} from '../generated/cms/argument/future-first-features/default';
import {loved_default} from '../generated/cms/argument/loved/default';
import {ArgumentComponent} from '../argument/argument.component';
import modular_default from '../generated/cms/feature/modular';
import serverless_default from '../generated/cms/feature/serverless';
import headless_default from '../generated/cms/feature/headless';
import fast_default from '../generated/cms/feature/fast';
import shapers_default from '../generated/cms/feature/shapers';
import visualEditing_default from '../generated/cms/feature/visual-editing';
import searchEngine_default from '../generated/cms/feature/search-engine';
import {CmsFeatureComponent} from '../cms-feature/cms-feature.component';

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
  protected readonly arguments = {
    environmentAgnostic: environmentAgnostic_default,
    trulyHeadless: trulyHeadless_default,
    modularHackable: modularHackable_default,
    lowCode: lowCode_default,
    futureFirstFeatures: futureFirstFeatures_default,
    loved: loved_default,
  };

  protected readonly features = {
    modular: modular_default,
    serverless: serverless_default,
    headless: headless_default,
    fast: fast_default,
    shapers: shapers_default,
    visualEditing: visualEditing_default,
    searchEngine: searchEngine_default,
  };

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
