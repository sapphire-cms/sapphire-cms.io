import {Docs} from "../../../docs.types";

export const check_default: Docs = {
  "title": "Check Type",
  "precedent": "docs/content-modeling/field-types",
  "next": "docs/content-modeling/field-types/group",
  "content": "The `check` type is a simple boolean field that accepts only **yes** or **no** values.\n\nExample of a `check` field definition:\n\n```yaml\nfields:\n  - name: available\n    label: Is Tier Available\n    type: check\n```"
};
