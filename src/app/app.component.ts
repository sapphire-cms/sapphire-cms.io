import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ContactFormComponent} from './contact-form/contact-form.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {MainHeroComponent} from './main-hero/main-hero.component';
import {Meta} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
import {filter, map} from 'rxjs';
import layout_default from './generated/cms/layout/layout';
import {MarkdownService} from 'ngx-markdown';
import {ScreenTrackingService} from '@angular/fire/analytics';

const canonicalPrefix = 'https://sapphire-cms.io';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactFormComponent, NavbarComponent, FooterComponent, MainHeroComponent],
  providers: [ScreenTrackingService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public readonly layout = layout_default;

  constructor(private readonly markdownService: MarkdownService,
              private readonly router: Router,
              private readonly activatedRoute: ActivatedRoute,
              private readonly meta: Meta,
              private readonly trackingService: ScreenTrackingService,
              @Inject(DOCUMENT) private readonly document: Document) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd), // Filter NavigationEnd events
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'))
      .subscribe((route) => {
        const canonicalUrl = canonicalPrefix + this.router.url;
        this.setCanonical(canonicalUrl);

        if (route.snapshot.title) {
          this.setTitle(route.snapshot.title);
        }

        const data = route.snapshot.data;

        if (data['description']) {
          this.setDescription(data['description']);
        }
      });
  }

  ngOnInit() {
    this.markdownService.renderer.blockquote = quote => {
      return `<article class="message is-info">
        <div class="message-body">
          ${quote}
        </div>
      </article>`;
    };
  }

  public scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private setTitle(title: string) {
    this.meta.updateTag({ name: 'og:title', content: title });
    this.meta.updateTag({ name: 'twitter:title', content: title });
  }

  private setDescription(description: string) {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  private setCanonical(canonicalUrl: string) {
    const canonicalElement = this.document.querySelector('link[rel="canonical"]');
    canonicalElement?.setAttribute('href', canonicalUrl);
  }
}
