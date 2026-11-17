import diamond_default from "./diamond";
import amethyst_default from "./amethyst";

export * from "./diamond";
export * from "./amethyst";

export const sponsorTier = {
        "diamond": {
            "default": diamond_default,
        },
        "amethyst": {
            "default": amethyst_default,
        },
    } as const;
