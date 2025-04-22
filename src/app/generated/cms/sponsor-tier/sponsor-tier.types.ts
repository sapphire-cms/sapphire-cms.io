export type SponsorTier = {
  tier: string;
  img: string;
  available: boolean;
  category?: string;
  donation: number;
  "for-whom"?: string[];
  description: string;
};
