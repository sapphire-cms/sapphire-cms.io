import diamond_default from "./diamond";
import amethyst_default from "./amethyst";
import obsidian_default from "./obsidian";

export * from "./diamond";
export * from "./amethyst";
export * from "./obsidian";

export const sponsorTier = {
        "diamond": {
            "default": diamond_default,
        },
        "amethyst": {
            "default": amethyst_default,
        },
        "obsidian": {
            "default": obsidian_default,
        },
    } as const;
