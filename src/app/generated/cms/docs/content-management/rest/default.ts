import {Docs} from "../../docs.types";

export const rest_default: Docs = {
  "title": "REST API",
  "precedent": "docs/content-management/cli:default",
  "next": "docs/content-management/manager-ui:default",
  "content": "REST API is an unavoidable feature of any modern web service, and Sapphire makes no exception.\n\nThis API is provided by the `rest` module and allows you to administer the CMS and manage its content through exposed REST endpoints.\n\nThe `rest` module is mandatory if you want to manage your CMS and its content using our web client \n**Manager UI** (presented in its own chapter of this documentation).\n\n## Install\n\nAdd the REST API by installing its package:\n\n ```shell\n sapphire-cms package install rest\n ```\n\n or\n\n ```shell\n scms pkg i rest\n ```\n\n## Usage\n\nThe `rest` module provides the `admin` and `management` layers, \nwhich can be enabled by listing them in the configuration file `sapphire-cms.config.yaml`:\n\n```yaml\n# ./sapphire-cms.config.yaml\n\n# ...\nlayers:\n  admin: \"@rest\"\n  management: \"@rest\"\n```"
};
