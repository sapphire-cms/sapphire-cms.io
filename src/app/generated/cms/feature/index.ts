import headless_default from "./headless";
import fast_default from "./fast";
import modular_default from "./modular";
import searchEngine_default from "./search-engine";
import serverless_default from "./serverless";
import shapers_default from "./shapers";
import visualEditing_default from "./visual-editing";

export * from "./headless";
export * from "./fast";
export * from "./modular";
export * from "./search-engine";
export * from "./serverless";
export * from "./shapers";
export * from "./visual-editing";

export const feature = {
        "headless": {
            "default": headless_default,
        },
        "fast": {
            "default": fast_default,
        },
        "modular": {
            "default": modular_default,
        },
        "search-engine": {
            "default": searchEngine_default,
        },
        "serverless": {
            "default": serverless_default,
        },
        "shapers": {
            "default": shapers_default,
        },
        "visual-editing": {
            "default": visualEditing_default,
        },
    } as const;
