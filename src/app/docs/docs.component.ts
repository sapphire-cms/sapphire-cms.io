import {Component} from '@angular/core';
import {DocsMenuComponent} from '../docs-menu/docs-menu.component';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import introduction_default from '../generated/cms/docs/getting-started/introduction';
import installation_default from '../generated/cms/docs/getting-started/installation';
import cmsConfig_default from '../generated/cms/docs/usage/cms-config';
import contentSchemas_default from '../generated/cms/docs/usage/content-schemas';
import renderingPipelines_default from '../generated/cms/docs/usage/rendering-pipelines';
import text_default from '../generated/cms/docs/usage/content-modeling/field-types/text';
import tag_default from '../generated/cms/docs/usage/content-modeling/field-types/tag';
import {Docs} from '../generated/cms/docs/docs.types';
import {MarkdownComponent} from 'ngx-markdown';
import coreConcepts_default from '../generated/cms/docs/getting-started/core-concepts';
import documentShapers_default from '../generated/cms/docs/usage/document-shapers';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [
    DocsMenuComponent,
    MarkdownComponent
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css'
})
export class DocsComponent {
  public doc: Docs = introduction_default;

  private readonly pages: { [key : string]: Docs } = {
    'getting-started/introduction': introduction_default,
    'getting-started/core-concepts': coreConcepts_default,
    'getting-started/installation': installation_default,
    'usage/csm-config': cmsConfig_default,
    'usage/content-schemas': contentSchemas_default,
    'usage/rendering-pipelines': renderingPipelines_default,
    'usage/document-shapers': documentShapers_default,
    'usage/content-modeling/field-types/text': text_default,
    'usage/content-modeling/field-types/tag': tag_default,
  };

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const currentUrl = this.router.url;
        const subpath = currentUrl.replace(/^\/docs\/?/, '');
        this.doc = this.pages[subpath];
      });
  }

  copyToClipboard() {
    // DO NOTHING, handled by ngx-markdown
  }
}
