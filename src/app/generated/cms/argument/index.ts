import environmentAgnostic_default from "./environment-agnostic";
import futureFirstFeatures_default from "./future-first-features";
import loved_default from "./loved";
import lowCode_default from "./low-code";
import modularHackable_default from "./modular-hackable";
import trulyHeadless_default from "./truly-headless";

export * from "./environment-agnostic";
export * from "./future-first-features";
export * from "./loved";
export * from "./low-code";
export * from "./modular-hackable";
export * from "./truly-headless";

export const argument = {
        "environment-agnostic": {
            "default": environmentAgnostic_default,
        },
        "future-first-features": {
            "default": futureFirstFeatures_default,
        },
        "loved": {
            "default": loved_default,
        },
        "low-code": {
            "default": lowCode_default,
        },
        "modular-hackable": {
            "default": modularHackable_default,
        },
        "truly-headless": {
            "default": trulyHeadless_default,
        },
    } as const;
