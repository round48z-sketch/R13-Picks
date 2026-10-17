/**
 * Homepage FEATURED STORIES — manually curated article slugs.
 * Only real published articles; order is display order.
 */
export const featuredStorySlugs = [
  "wireless-earbuds-under-10000",
  "desk-setup-5-picks",
  "beauty-appliances-5-picks",
  "womens-watches-7-picks",
  "gadgets-under-10000-recommendations-10",
  "refurbished-laptops-5-picks",
  "mouse-recommendations-10",
] as const;

export type FeaturedStorySlug = (typeof featuredStorySlugs)[number];
