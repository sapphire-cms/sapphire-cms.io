import {Docs} from "../../../docs.types";

export const integer_default: Docs = {
  "title": "Validator Integer",
  "precedent": "docs/content-modeling/field-validators/between",
  "next": "docs/content-modeling/field-validators/required",
  "content": "The `integer` validator ensures that the field value is an **integer** (a whole number without decimals).\nIt can be applied to any field that resolves to a numeric value.\n\nThis validator does not accept any parameters.\n\nHere’s an example:\n\n```yaml\nfields:\n  - name: opening-hour\n    type: number\n    required: true\n    validation:\n      - integer\n\n```\n\nIn the example above, the `opening-hour` field must be a whole number. Decimal values like `10.5` would not be accepted."
};
