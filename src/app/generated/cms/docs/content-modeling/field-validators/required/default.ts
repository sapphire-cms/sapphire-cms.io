import {Docs} from "../../../docs.types";

export const required_default: Docs = {
  "title": "Validator Required",
  "precedent": "docs/content-modeling/field-validators/integer",
  "next": "docs/content-management/cli",
  "content": "The `required` validator ensures that a content editor has provided a value for the field.\nIt validates that the value is present, and for textual fields, it ensures the input is **not empty** and **not just blank spaces**.\n\nThe `required` validator is automatically applied behind the scenes when a field is marked with `required: true`.\nThe following two notations are equivalent:\n\n```yaml\nfields:\n  - name: opening-hour\n    type: number\n    required: true\n```\n\nis equivalent to:\n\n```yaml\nfields:\n  - name: opening-hour\n    validation:\n      - required\n```\n\nThis validator does not take any parameters."
};
