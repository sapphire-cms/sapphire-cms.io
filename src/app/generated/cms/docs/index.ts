import cloudinary_default from "./integrations/cloudinary";
import usernamePassword_default from "./authentication/username-password";
import cli_default from "./content-management/cli";

export * from "./integrations/cloudinary";
export * from "./authentication/username-password";
export * from "./content-management/cli";

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
        },
    } as const;
