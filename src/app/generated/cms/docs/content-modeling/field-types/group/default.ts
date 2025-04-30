import {Docs} from "../../../docs.types";

export const group_default: Docs = {
  "title": "Group Type",
  "precedent": "docs/content-modeling/field-types/check",
  "next": "docs/content-modeling/field-types/number",
  "content": "The `group` type is a handy structure that allows you to organize multiple fields into a single logical entity inside a document.\nFields of type `group` are the only fields that can **contain their own nested fields**.\n\nExample of a `group` field definition:\n\n```yaml\nfields:\n  - name: socials\n    label: Socials\n    description: Links to the social media\n    type: group\n    required: true\n    is-list: true\n    fields:\n      - name: label\n        label: Label\n        type: text\n        example: Twitter\n        required: true\n\n      - name: href\n        label: Link\n        type: text\n        example: https://twitter/sapphire-cms\n        required: true\n\n      - name: icon\n        label: Icon Class\n        description: Fontawesome classes for the icon\n        type: text\n        example: fa-brands fa-twitter\n        required: true\n```\n\nIn the example above, we declare the field `socials`, which is a **list** of grouped entities.\nEach entity contains three fields: `label`, `href`, and `icon`."
};
