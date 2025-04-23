export type Layout = {
  links: {
    label: string;
    "router-link": string;
    fragment?: string;
  }[];
  socials: {
    label: string;
    href: string;
    icon: string;
  }[];
};
