export type DocsMenu = {
  sections?: {
    label: string;
    topics?: {
      title: string;
      ref?: string;
      "coming-soon"?: boolean;
      chapters?: {
        title: string;
        ref?: string;
        "coming-soon"?: boolean;
      }[];
    }[];
  }[];
};
