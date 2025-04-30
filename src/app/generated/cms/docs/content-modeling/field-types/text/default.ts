import {Docs} from "../../../docs.types";

export const text_default: Docs = {
  "title": "Text Type",
  "precedent": "docs/content-modeling/field-types/tag",
  "next": "docs/content-modeling/field-validators",
  "content": "The `text` type is designed to store relatively short, **single-line unformatted strings** — such as titles, labels, names, or short sentences.\nFor longer blocks of text, or for formatted/styled content, it is highly recommended to use the `rich-text` type instead.\n\nDefining a `text` field in your content schema is straightforward. Simply declare it like this:\n\n```yaml\nfields:\n  - name: tier\n    label: Tier Name\n    description: A catchy name for the sponsor tier.\n    type: text\n    required: true\n```"
};
