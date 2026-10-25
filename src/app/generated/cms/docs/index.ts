import cloudinary_default from "./integrations/cloudinary";
import usernamePassword_default from "./authentication/username-password";

export * from "./integrations/cloudinary";
export * from "./authentication/username-password";

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
    } as const;
