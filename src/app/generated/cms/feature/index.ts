import modular_default from "./modular";

export * from "./modular";

export const feature = {
        "modular": {
            "default": modular_default,
        },
    } as const;
