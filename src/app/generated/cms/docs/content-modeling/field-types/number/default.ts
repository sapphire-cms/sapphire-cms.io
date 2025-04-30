import {Docs} from "../../../docs.types";

export const number_default: Docs = {
  "title": "Number Type",
  "precedent": "docs/content-modeling/field-types/group",
  "next": "docs/content-modeling/field-types/reference",
  "content": "The `number` type is a simple field that accepts numeric values only.\n\nExample of a `number` field definition:\n\n```yaml\nfields:\n  - name: donation\n    label: Donation Amount\n    description: Required donation amount in USD.\n    type: number\n    required: true\n```"
};
