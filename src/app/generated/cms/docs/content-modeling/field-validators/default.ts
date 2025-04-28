import {Docs} from "../../docs.types";

export const fieldValidators_default: Docs = {
  "title": "Field Validators",
  "content": "**Field Validators** add additional constraints on the values a field can accept.\nThey improve the **safety** and **consistency** of content by validating human input during the content editing process.\n\nTo add validators to a field, simply define them as a list under the `validation` property in the field declaration:\n\n```yaml\nfields:\n  - name: opening-hour\n    type: number\n    required: true\n    validation:\n      - integer\n      \n      - name: between\n        params:\n          min: 0\n          max: 23\n```"
};
