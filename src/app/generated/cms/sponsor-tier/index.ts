import diamond_default from "./diamond";

export * from "./diamond";

export const sponsorTier = {
        "diamond": {
            "default": diamond_default,
        },
    } as const;
