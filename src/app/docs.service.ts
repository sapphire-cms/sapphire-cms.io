import {Injectable} from '@angular/core';
import {Docs} from './generated/cms/docs/docs.types';
import introduction_default from './generated/cms/docs/getting-started/introduction';
import coreConcepts_default from './generated/cms/docs/getting-started/core-concepts';
import installation_default from './generated/cms/docs/getting-started/installation';
import cmsConfig_default from './generated/cms/docs/usage/cms-config';
import contentSchemas_default from './generated/cms/docs/usage/content-schemas';
import renderingPipelines_default from './generated/cms/docs/usage/rendering-pipelines';
import documentShapers_default from './generated/cms/docs/usage/document-shapers';
import fieldTypes_default from './generated/cms/docs/content-modeling/field-types';
import check_default from './generated/cms/docs/content-modeling/field-types/check';
import group_default from './generated/cms/docs/content-modeling/field-types/group';
import number_default from './generated/cms/docs/content-modeling/field-types/number';
import reference_default from './generated/cms/docs/content-modeling/field-types/reference';
import richText_default from './generated/cms/docs/content-modeling/field-types/rich-text';
import tag_default from './generated/cms/docs/content-modeling/field-types/tag';
import text_default from './generated/cms/docs/content-modeling/field-types/text';
import fieldValidators_default from './generated/cms/docs/content-modeling/field-validators';
import between_default from './generated/cms/docs/content-modeling/field-validators/between';
import integer_default from './generated/cms/docs/content-modeling/field-validators/integer';
import required_default from './generated/cms/docs/content-modeling/field-validators/required';
import cli_default from './generated/cms/docs/content-management/cli';
import node_default from './generated/cms/docs/deployment/node';

@Injectable({
  providedIn: 'root'
})
export class DocsService {
  public readonly pages: { [key : string]: Docs } = {
    'docs/getting-started/introduction': introduction_default,
    'docs/getting-started/core-concepts': coreConcepts_default,
    'docs/getting-started/installation': installation_default,
    'docs/usage/csm-config': cmsConfig_default,
    'docs/usage/content-schemas': contentSchemas_default,
    'docs/usage/rendering-pipelines': renderingPipelines_default,
    'docs/usage/document-shapers': documentShapers_default,
    'docs/content-modeling/field-types': fieldTypes_default,
    'docs/content-modeling/field-types/check': check_default,
    'docs/content-modeling/field-types/group': group_default,
    'docs/content-modeling/field-types/number': number_default,
    'docs/content-modeling/field-types/reference': reference_default,
    'docs/content-modeling/field-types/rich-text': richText_default,
    'docs/content-modeling/field-types/tag': tag_default,
    'docs/content-modeling/field-types/text': text_default,
    'docs/content-modeling/field-validators': fieldValidators_default,
    'docs/content-modeling/field-validators/between': between_default,
    'docs/content-modeling/field-validators/integer': integer_default,
    'docs/content-modeling/field-validators/required': required_default,
    'docs/content-management/cli': cli_default,
    'docs/deployment/node': node_default,
  };

  public refToTitle(ref: string): string {
    return this.pages[ref].title;
  }
}
