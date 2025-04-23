import {Layout} from "../layout.types";

export const layout_default: Layout = {
  "links": [
    {
      "label": "Home",
      "router-link": "/home"
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
      "href": "https://github.com/sapphire-cms",
      "icon": "fa-brands fa-github"
    },
    {
      "label": "Discord",
      "href": "#",
      "icon": "fa-brands fa-discord"
    }
  ]
};
