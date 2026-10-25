import cloudinary_default from "./integrations/cloudinary";
import usernamePassword_default from "./authentication/username-password";
import cli_default from "./content-management/cli";
import managerUi_default from "./content-management/manager-ui";
import rest_default from "./content-management/rest";
import fieldTypes_default from "./content-modeling/field-types";
import check_default from "./content-modeling/field-types/check";

export * from "./integrations/cloudinary";
export * from "./authentication/username-password";
export * from "./content-management/cli";
export * from "./content-management/manager-ui";
export * from "./content-management/rest";
export * from "./content-modeling/field-types";
export * from "./content-modeling/field-types/check";

export const docs = {
        "integrations": {
            "cloudinary": {
                "default": cloudinary_default,
            },
        },
        "authentication": {
            "username-password": {
                "default": usernamePassword_default,
            },
        },
        "content-management": {
            "cli": {
                "default": cli_default,
            },
            "manager-ui": {
                "default": managerUi_default,
            },
            "rest": {
                "default": rest_default,
            },
        },
        "content-modeling": {
            "field-types": {
                "default": fieldTypes_default,
                "check": {
                    "default": check_default,
                },
            },
        },
    } as const;
