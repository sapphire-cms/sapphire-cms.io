import {Component} from '@angular/core';
import {DocsMenuComponent} from '../docs-menu/docs-menu.component';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import introduction_default from '../generated/cms/docs/getting-started/introduction';
import installation_default from '../generated/cms/docs/getting-started/installation';
import cmsConfig_default from '../generated/cms/docs/usage/cms-config';
import contentSchemas_default from '../generated/cms/docs/usage/content-schemas';
import renderingPipelines_default from '../generated/cms/docs/usage/rendering-pipelines';
import {Docs} from '../generated/cms/docs/docs.types';
import {MarkdownComponent} from 'ngx-markdown';
import coreConcepts_default from '../generated/cms/docs/getting-started/core-concepts';
import documentShapers_default from '../generated/cms/docs/usage/document-shapers';
import fieldTypes_default from '../generated/cms/docs/content-modeling/field-types';
import check_default from '../generated/cms/docs/content-modeling/field-types/check';
import group_default from '../generated/cms/docs/content-modeling/field-types/group';
import number_default from '../generated/cms/docs/content-modeling/field-types/number';
import reference_default from '../generated/cms/docs/content-modeling/field-types/reference';
import richText_default from '../generated/cms/docs/content-modeling/field-types/rich-text';
import text_default from '../generated/cms/docs/content-modeling/field-types/text';
import tag_default from '../generated/cms/docs/content-modeling/field-types/tag';
import fieldValidators_default from '../generated/cms/docs/content-modeling/field-validators';
import between_default from '../generated/cms/docs/content-modeling/field-validators/between';
import integer_default from '../generated/cms/docs/content-modeling/field-validators/integer';
import required_default from '../generated/cms/docs/content-modeling/field-validators/required';
import cli_default from '../generated/cms/docs/content-management/cli';
import node_default from '../generated/cms/docs/deployment/node';

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

  public isMenuVisible = false;

  private readonly pages: { [key : string]: Docs } = {
    'getting-started/introduction': introduction_default,
    'getting-started/core-concepts': coreConcepts_default,
    'getting-started/installation': installation_default,
    'usage/csm-config': cmsConfig_default,
    'usage/content-schemas': contentSchemas_default,
    'usage/rendering-pipelines': renderingPipelines_default,
    'usage/document-shapers': documentShapers_default,
    'content-modeling/field-types': fieldTypes_default,
    'content-modeling/field-types/check': check_default,
    'content-modeling/field-types/group': group_default,
    'content-modeling/field-types/number': number_default,
    'content-modeling/field-types/reference': reference_default,
    'content-modeling/field-types/rich-text': richText_default,
    'content-modeling/field-types/tag': tag_default,
    'content-modeling/field-types/text': text_default,
    'content-modeling/field-validators': fieldValidators_default,
    'content-modeling/field-validators/between': between_default,
    'content-modeling/field-validators/integer': integer_default,
    'content-modeling/field-validators/required': required_default,
    'content-management/cli': cli_default,
    'deployment/node': node_default,
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

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  copyToClipboard() {
    // DO NOTHING, handled by ngx-markdown
  }

  protected readonly filter = filter;
}
