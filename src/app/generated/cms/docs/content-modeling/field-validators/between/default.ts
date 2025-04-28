import {Docs} from "../../../docs.types";

export const between_default: Docs = {
  "title": "Validator Between",
  "content": "The `between` validator ensures that a field’s numeric value falls within a specified range.\nIt can be applied to any field whose value resolves to a number.\n\nHere’s an example:\n\nHere the example: \n\n```yaml\nfields:\n  - name: opening-hour\n    type: number\n    required: true\n    validation:\n      - integer\n      \n      - name: between\n        params:\n          min: 0\n          max: 23\n```\n\nValidator `between` supports the following parameters:\n\n| Parameter | Type   | Mandatory | Description                        |\n|-----------|--------|-----------|------------------------------------|\n| min       | number | yes       | Minimal allowed value (inclusive). |\n| max       | number | yes       | Maximum allowed value (inclusive). |"
};
