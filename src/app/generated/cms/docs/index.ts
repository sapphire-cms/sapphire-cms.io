import integer_default from "./content-modeling/field-validators/integer";
import check_default from "./content-modeling/field-types/check";
import coreConcepts_default from "./getting-started/core-concepts";

export * from "./content-modeling/field-validators/integer";
export * from "./content-modeling/field-types/check";
export * from "./getting-started/core-concepts";

export const docs = {
        "content-modeling": {
            "field-validators": {
                "integer": {
                    "default": integer_default,
                },
            },
            "field-types": {
                "check": {
                    "default": check_default,
                },
            },
        },
        "getting-started": {
            "core-concepts": {
                "default": coreConcepts_default,
            },
        },
    } as const;
