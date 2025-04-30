import {DocsMenu} from "../docs-menu.types";

export const docsMenu_default: DocsMenu = {
  "sections": [
    {
      "label": "Getting Started",
      "pages": [
        "docs/getting-started/introduction",
        "docs/getting-started/core-concepts",
        "docs/getting-started/installation"
      ]
    },
    {
      "label": "Usage",
      "pages": [
        "docs/usage/csm-config",
        "docs/usage/content-schemas",
        "docs/usage/rendering-pipelines",
        "docs/usage/document-shapers"
      ]
    },
    {
      "label": "Content Modeling",
      "pages": [
        "docs/content-modeling/field-types",
        "docs/content-modeling/field-types/check",
        "docs/content-modeling/field-types/group",
        "docs/content-modeling/field-types/number",
        "docs/content-modeling/field-types/reference",
        "docs/content-modeling/field-types/rich-text",
        "docs/content-modeling/field-types/tag",
        "docs/content-modeling/field-types/text",
        "docs/content-modeling/field-validators",
        "docs/content-modeling/field-validators/between",
        "docs/content-modeling/field-validators/integer",
        "docs/content-modeling/field-validators/required"
      ]
    },
    {
      "label": "Content Management",
      "pages": [
        "docs/content-management/cli"
      ]
    }
  ]
};
