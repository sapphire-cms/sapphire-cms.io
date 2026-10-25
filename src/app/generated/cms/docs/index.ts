import cloudinary_default from "./integrations/cloudinary";

export * from "./integrations/cloudinary";

export const docs = {
        "integrations": {
            "cloudinary": {
                "default": cloudinary_default,
            },
        },
    } as const;
