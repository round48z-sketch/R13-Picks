import type { Article } from "@/content/articles";
import { getCategory, type CategorySlug } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import {
  categorySearchKeywords,
  expandSearchVariants,
  normalizeSearchText,
  productTypeSearchKeywords,
  subCategorySearchKeywords,
} from "@/content/search-keywords";
import type { SubCategoryId } from "@/content/subcategories";
import { getSubCategoryLabel } from "@/content/subcategories";
import { getAllArticles, getArticleThumbnail } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";

export type GlobalSearchEntry = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  categoryName: string;
  productName: string;
  image: { src: string; alt: string };
  /** Normalized text used for matching (includes synonyms / variants). */
  haystack: string;
};

function uniqueKeywords(values: Array<string | undefined | null>): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const value of values) {
    if (!value) continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    const key = trimmed.toLocaleLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(trimmed);
  }
  return out;
}

function collectKeywords(article: Article, locale: Locale): string[] {
  const category = article.category;
  const subId = article.subCategory as SubCategoryId | undefined;
  const fromProductType = productTypeSearchKeywords
    .filter((rule) => rule.match.test(article.productType) || rule.match.test(article.title))
    .flatMap((rule) => rule.keywords);

  return uniqueKeywords([
    ...categorySearchKeywords[category],
    ...(subId ? subCategorySearchKeywords[subId] ?? [] : []),
    ...fromProductType,
    ...(article.searchKeywords ?? []),
    getCategory(category)?.name,
    getCategory(category)?.ja,
    subId ? getSubCategoryLabel(category, subId, locale) : undefined,
    subId ? getSubCategoryLabel(category, subId, "ja") : undefined,
    article.subCategory,
  ]);
}

function buildHaystack(article: Article, locale: Locale): string {
  const keywords = collectKeywords(article, locale);
  const raw = [
    article.title,
    article.productName,
    article.productType,
    article.slug.replace(/-/g, " "),
    article.category,
    article.subCategory ?? "",
    article.description,
    article.excerpt,
    article.summary ?? "",
    ...(article.points ?? []).slice(0, 8),
    ...(article.recommendedFor ?? []).slice(0, 6),
    ...keywords,
  ].join(" ");

  return expandSearchVariants(normalizeSearchText(raw));
}

export function buildGlobalSearchIndex(locale: Locale): GlobalSearchEntry[] {
  return getAllArticles().map((article) => {
    const localized = localizeArticle(article, locale);
    const thumbnail =
      localized.guideThumbnailImage ??
      localized.thumbnailImage ??
      getArticleThumbnail(localized);
    const category = getCategory(localized.category);

    return {
      slug: localized.slug,
      title: localized.title,
      excerpt: localized.excerpt,
      category: localized.category,
      categoryName: category?.name ?? localized.category,
      productName: localized.productName,
      image: {
        src: thumbnail.src,
        alt: thumbnail.alt || localized.title,
      },
      haystack: buildHaystack(localized, locale),
    };
  });
}

function scoreEntry(entry: GlobalSearchEntry, terms: string[]): number {
  const title = normalizeSearchText(entry.title);
  const product = normalizeSearchText(entry.productName);
  const slug = normalizeSearchText(entry.slug.replace(/-/g, " "));
  const category = normalizeSearchText(`${entry.category} ${entry.categoryName}`);
  const joinedQuery = terms.join(" ");

  let score = 0;

  if (title === joinedQuery || product === joinedQuery) score += 1200;
  if (title.includes(joinedQuery)) score += 500;
  if (product.includes(joinedQuery)) score += 450;
  if (slug.includes(joinedQuery)) score += 400;

  for (const term of terms) {
    if (title === term) score += 300;
    else if (title.startsWith(term)) score += 220;
    else if (title.includes(term)) score += 160;

    if (product === term) score += 280;
    else if (product.includes(term)) score += 180;

    if (slug.includes(term)) score += 140;
    if (category.includes(term)) score += 90;
    if (entry.haystack.includes(term)) score += 40;
  }

  // Prefer entries that match every term more strongly already; tiny boost for shorter titles.
  score += Math.max(0, 40 - Math.min(entry.title.length, 40));
  return score;
}

export function searchGlobalEntries(
  entries: GlobalSearchEntry[],
  query: string,
  limit: number,
): GlobalSearchEntry[] {
  const normalized = expandSearchVariants(normalizeSearchText(query));
  if (normalized.length < 2) return [];

  const terms = normalized.split(" ").filter(Boolean);
  if (terms.length === 0) return [];

  return entries
    .map((entry) => {
      const matched = terms.every((term) => entry.haystack.includes(term));
      if (!matched) return null;
      return { entry, score: scoreEntry(entry, terms) };
    })
    .filter((item): item is { entry: GlobalSearchEntry; score: number } => Boolean(item))
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "ja"))
    .slice(0, limit)
    .map((item) => item.entry);
}
