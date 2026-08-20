import usernamePassword_default from "./authentication/username-password";
import coreConcepts_default from "./getting-started/core-concepts";
import installation_default from "./getting-started/installation";
import introduction_default from "./getting-started/introduction";
import integer_default from "./content-modeling/field-validators/integer";
import fieldTypes_default from "./content-modeling/field-types";
import cli_default from "./content-management/cli";
import managerUi_default from "./content-management/manager-ui";
import rest_default from "./content-management/rest";
import check_default from "./content-modeling/field-types/check";
import group_default from "./content-modeling/field-types/group";
import number_default from "./content-modeling/field-types/number";
import reference_default from "./content-modeling/field-types/reference";
import richText_default from "./content-modeling/field-types/rich-text";
import tag_default from "./content-modeling/field-types/tag";
import text_default from "./content-modeling/field-types/text";
import fieldValidators_default from "./content-modeling/field-validators";
import between_default from "./content-modeling/field-validators/between";
import required_default from "./content-modeling/field-validators/required";
import deploymentOverview_default from "./deployment/deployment-overview";
import firebase_default from "./deployment/firebase";
import node_default from "./deployment/node";
import github_default from "./integrations/github";
import overview_default from "./integrations/overview";
import aot_default from "./usage/aot";
import cmsConfig_default from "./usage/cms-config";
import contentSchemas_default from "./usage/content-schemas";
import documentShapers_default from "./usage/document-shapers";
import renderingPipelines_default from "./usage/rendering-pipelines";

export * from "./authentication/username-password";
export * from "./getting-started/core-concepts";
export * from "./getting-started/installation";
export * from "./getting-started/introduction";
export * from "./content-modeling/field-validators/integer";
export * from "./content-modeling/field-types";
export * from "./content-management/cli";
export * from "./content-management/manager-ui";
export * from "./content-management/rest";
export * from "./content-modeling/field-types/check";
export * from "./content-modeling/field-types/group";
export * from "./content-modeling/field-types/number";
export * from "./content-modeling/field-types/reference";
export * from "./content-modeling/field-types/rich-text";
export * from "./content-modeling/field-types/tag";
export * from "./content-modeling/field-types/text";
export * from "./content-modeling/field-validators";
export * from "./content-modeling/field-validators/between";
export * from "./content-modeling/field-validators/required";
export * from "./deployment/deployment-overview";
export * from "./deployment/firebase";
export * from "./deployment/node";
export * from "./integrations/github";
export * from "./integrations/overview";
export * from "./usage/aot";
export * from "./usage/cms-config";
export * from "./usage/content-schemas";
export * from "./usage/document-shapers";
export * from "./usage/rendering-pipelines";

export const docs = {
        "authentication": {
            "username-password": {
                "default": usernamePassword_default,
            },
        },
        "getting-started": {
            "core-concepts": {
                "default": coreConcepts_default,
            },
            "installation": {
                "default": installation_default,
            },
            "introduction": {
                "default": introduction_default,
            },
        },
        "content-modeling": {
            "field-validators": {
                "integer": {
                    "default": integer_default,
                },
                "default": fieldValidators_default,
                "between": {
                    "default": between_default,
                },
                "required": {
                    "default": required_default,
                },
            },
            "field-types": {
                "default": fieldTypes_default,
                "check": {
                    "default": check_default,
                },
                "group": {
                    "default": group_default,
                },
                "number": {
                    "default": number_default,
                },
                "reference": {
                    "default": reference_default,
                },
                "rich-text": {
                    "default": richText_default,
                },
                "tag": {
                    "default": tag_default,
                },
                "text": {
                    "default": text_default,
                },
            },
        },
        "content-management": {
            "cli": {
                "default": cli_default,
            },
            "manager-ui": {
                "default": managerUi_default,
            },
            "rest": {
                "default": rest_default,
            },
        },
        "deployment": {
            "deployment-overview": {
                "default": deploymentOverview_default,
            },
            "firebase": {
                "default": firebase_default,
            },
            "node": {
                "default": node_default,
            },
        },
        "integrations": {
            "github": {
                "default": github_default,
            },
            "overview": {
                "default": overview_default,
            },
        },
        "usage": {
            "aot": {
                "default": aot_default,
            },
            "cms-config": {
                "default": cmsConfig_default,
            },
            "content-schemas": {
                "default": contentSchemas_default,
            },
            "document-shapers": {
                "default": documentShapers_default,
            },
            "rendering-pipelines": {
                "default": renderingPipelines_default,
            },
        },
    } as const;
