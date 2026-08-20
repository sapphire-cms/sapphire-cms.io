import ruby_default from "./ruby";
import amethyst_default from "./amethyst";
import diamond_default from "./diamond";
import obsidian_default from "./obsidian";
import quartz_default from "./quartz";

export * from "./ruby";
export * from "./amethyst";
export * from "./diamond";
export * from "./obsidian";
export * from "./quartz";

export const sponsorTier = {
        "ruby": {
            "default": ruby_default,
        },
        "amethyst": {
            "default": amethyst_default,
        },
        "diamond": {
            "default": diamond_default,
        },
        "obsidian": {
            "default": obsidian_default,
        },
        "quartz": {
            "default": quartz_default,
        },
    } as const;
