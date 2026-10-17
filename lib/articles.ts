import { articles, type Article } from "@/content/articles";
import { getCategory, type CategorySlug } from "@/content/categories";
import { editorsPickSlugs } from "@/content/editors-picks";
import { featuredStorySlugs } from "@/content/featured-stories";

/** Homepage New Arrivals limit (full catalog remains on /picks). */
export const NEW_ARRIVALS_LIMIT = 12;

export function getAllArticles() {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

/** Latest articles in the same order as getAllArticles (publishedAt desc). */
export function getLatestArticles(limit = NEW_ARRIVALS_LIMIT) {
  return getAllArticles().slice(0, limit);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(slug: CategorySlug) {
  return getAllArticles().filter((article) => article.category === slug);
}

export function getFeaturedArticles() {
  return getAllArticles().filter((article) => article.featured);
}

/**
 * Homepage hero carousel: curated public articles with strong local imagery
 * and category balance (watch / gadget / audio / desk / lifestyle).
 */
const heroCarouselSlugs = [
  "mens-watch-recommendations-10",
  "work-gadgets-recommendations-10",
  "wireless-earbuds-under-10000",
  "desk-setup-5-picks",
  "beauty-appliances-5-picks",
] as const;

export function getHeroCarouselArticles() {
  return heroCarouselSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => Boolean(article));
}

/**
 * Homepage Popular Guides, grouped by category tab.
 * Within each tab, order is priority: broad parent roundups first.
 */
const popularGuideTabs: { category: CategorySlug; slugs: string[] }[] = [
  {
    category: "watch",
    slugs: [
      "mens-watch-recommendations-10",
      "womens-watches-7-picks",
      "mens-watch-under-10000-recommendations-4",
      "radio-solar-watch-recommendations-3",
      "black-watch-recommendations-6",
      "outdoor-watch-recommendations-2",
    ],
  },
  {
    category: "gadget",
    slugs: [
      "work-gadgets-recommendations-10",
      "gadgets-under-10000-recommendations-10",
      "usb-c-charger-recommendations-8",
      "65w-usb-c-charger-recommendations-5",
    "travel-usb-c-charger-recommendations-7",
      "mouse-recommendations-10",
      "refurbished-laptops-5-picks",
      "wired-mouse-recommendations-5",
      "silent-mouse-recommendations-5",
    ],
  },
  {
    category: "audio",
    slugs: ["wireless-earbuds-under-10000", "black-wireless-earbuds"],
  },
  {
    category: "desk",
    slugs: ["desk-setup-5-picks"],
  },
  {
    category: "lifestyle",
    slugs: ["beauty-appliances-5-picks"],
  },
];

function resolveArticles(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => Boolean(article));
}

export function getPopularGuideTabs() {
  return popularGuideTabs.map((tab) => ({
    category: tab.category,
    articles: resolveArticles(tab.slugs),
  }));
}

export function getPopularGuideArticles() {
  return resolveArticles(popularGuideTabs.flatMap((tab) => tab.slugs));
}

/**
 * Homepage Editor's Picks from manual slug list (not `featured` flag).
 * Missing slugs are skipped so a typo does not break the home page.
 */
export function getEditorsPickArticles() {
  return resolveArticles([...editorsPickSlugs]);
}

/** Homepage FEATURED STORIES slider (manual slug list). */
export function getFeaturedStoryArticles() {
  return resolveArticles([...featuredStorySlugs]);
}

export function getRelatedArticles(article: Article, limit = 2) {
  const pinned = (article.relatedSlugs ?? [])
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is Article => Boolean(item) && item?.slug !== article.slug);
  const pinnedSlugs = new Set(pinned.map((item) => item.slug));

  return pinned
    .concat(
      getAllArticles().filter(
        (item) =>
          item.slug !== article.slug &&
          item.category === article.category &&
          !pinnedSlugs.has(item.slug),
      ),
    )
    .concat(
      getAllArticles().filter(
        (item) =>
          item.slug !== article.slug &&
          item.category !== article.category &&
          !pinnedSlugs.has(item.slug),
      ),
    )
    .slice(0, limit);
}

export function formatDate(isoDate: string, locale: string = "ja-JP") {
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function getArticleCategory(article: Article) {
  return getCategory(article.category);
}

/** Listing / OG / card image. */
export function getArticleThumbnail(article: Article) {
  return article.thumbnailImage ?? article.image;
}

/** Article detail page hero image. */
export function getArticleHero(article: Article) {
  return article.heroImage ?? article.image;
}
