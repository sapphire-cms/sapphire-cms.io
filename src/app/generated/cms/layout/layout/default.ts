import {Layout} from "../layout.types";

export const layout_default: Layout = {
  "links": [
    {
      "label": "Home",
      "router-link": "/home"
    },
    {
      "label": "Docs",
      "router-link": "/docs"
    },
    {
      "label": "Sponsorship",
      "router-link": "/sponsorship"
    },
    {
      "label": "Contact",
      "router-link": "/home",
      "fragment": "contact"
    }
  ],
  "socials": [
    {
      "label": "GitHub",
      "href": "https://github.com/sapphire-cms/sapphire-cms",
      "icon": "fa-brands fa-github"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/company/107213144",
      "icon": "fa-brands fa-linkedin"
    },
    {
      "label": "Discord",
      "href": "#",
      "icon": "fa-brands fa-discord"
    }
  ]
};
