import {Docs} from "../../docs.types";

export const managerUi_default: Docs = {
  "title": "Manager UI",
  "precedent": "docs/content-management/rest:default",
  "next": "docs/integrations/overview:default",
  "content": "Manager UI is a graphical web client that uses the REST API to administer the CMS and manage its content.\n\n![image](https://raw.githubusercontent.com/sapphire-cms/sapphire-manager-ui/master/docs/screenshot.png\n)\n\n## Install\n\nManager UI requires the REST API, so you need to install both the `rest` and `manager-ui` packages:\n\n```shell\nsapphire-cms package install rest manager-ui\n```\n\nor\n\n```shell\nscms pkg i rest manager-ui\n```\n\n## Usage\n\nOnce the `manager-ui` package is installed, it’s ready to use.\n\nTo access it, navigate to:\n\n```\nhttps://<cms-url>:<cms-port>/manager-ui\n```\n\nIf you are running Sapphire locally, it can be accessed at: <http://0.0.0.0:4747/manager-ui>"
};
