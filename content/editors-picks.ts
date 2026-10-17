/**
 * Homepage Editor's Picks — manually curated article slugs.
 * Order: [featured large, side top, side bottom].
 * Do not derive from `featured` (currently true for all articles).
 */
export const editorsPickSlugs = [
  "mens-watch-recommendations-10",
  "black-wireless-earbuds",
  "work-gadgets-recommendations-10",
] as const;

export type EditorsPickSlug = (typeof editorsPickSlugs)[number];
