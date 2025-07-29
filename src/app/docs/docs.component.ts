import {Component} from '@angular/core';
import {DocsMenuComponent} from '../docs-menu/docs-menu.component';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';
import introduction_default from '../generated/cms/docs/getting-started/introduction';
import {Docs} from '../generated/cms/docs/docs.types';
import {MarkdownComponent} from 'ngx-markdown';
import {DocsService} from '../docs.service';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    DocsMenuComponent,
    MarkdownComponent,
    RouterLink
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  public doc: Docs = introduction_default;

  public isMenuVisible = false;

  constructor(private readonly router: Router,
              private readonly docsService: DocsService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.doc = this.docsService.pages[this.router.url.slice(1)];
      });
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  copyToClipboard() {
    // DO NOTHING, handled by ngx-markdown
  }

  refToUrl(ref: string): string {
    return ref.split(':')[0];
  }

  refToTitle(ref: string): string {
    console.log(ref);

    return this.docsService.refToTitle(ref.split(':')[0]);
  }

  protected readonly filter = filter;
}
