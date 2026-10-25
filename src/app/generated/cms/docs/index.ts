import cloudinary_default from "./integrations/cloudinary";
import usernamePassword_default from "./authentication/username-password";
import cli_default from "./content-management/cli";
import managerUi_default from "./content-management/manager-ui";

export * from "./integrations/cloudinary";
export * from "./authentication/username-password";
export * from "./content-management/cli";
export * from "./content-management/manager-ui";

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
        },
    } as const;
