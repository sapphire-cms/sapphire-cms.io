import {Docs} from "../../../docs.types";

export const media_default: Docs = {
  "title": "Media Type",
  "precedent": "docs/content-modeling/field-types/text:default",
  "next": "docs/content-modeling/field-validators:default",
  "content": "The `media` type allows you to reference images and videos managed by the CMS from within your documents.\n\nDuring rendering, `media` fields are resolved into publicly accessible URLs pointing to the corresponding media assets.\n\nExample:\n\n```yaml\nfields:\n  - name: banner\n    label: Banner image\n    required: false\n    type: media\n```"
};
