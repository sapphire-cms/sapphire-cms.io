import integer_default from "./content-modeling/field-validators/integer";
import check_default from "./content-modeling/field-types/check";

export * from "./content-modeling/field-validators/integer";
export * from "./content-modeling/field-types/check";

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
    } as const;
