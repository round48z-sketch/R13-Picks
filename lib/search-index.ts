import type { Article } from "@/content/articles";
import { getCategory, type CategorySlug } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import {
  categorySearchKeywords,
  containsSearchToken,
  expandSearchVariants,
  getSynonymsForTerm,
  normalizeSearchText,
  parseSearchTerms,
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
  /** Normalized text used for matching (includes content-grounded synonyms). */
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

/** Pull searchable text from real article fields only (no invented attributes). */
function collectArticleBodyText(article: Article): string[] {
  const chunks: string[] = [
    article.title,
    article.productName,
    article.productType,
    article.slug.replace(/-/g, " "),
    article.category,
    article.subCategory ?? "",
    article.description,
    article.excerpt,
    article.intro,
    article.summary ?? "",
    article.design ?? "",
    article.pairing ?? "",
    article.note ?? "",
    ...(article.points ?? []),
    ...(article.recommendedFor ?? []),
    ...(article.scenes ?? []),
  ];

  for (const section of article.sections ?? []) {
    chunks.push(section.title, section.body);
  }

  for (const pick of article.picks ?? []) {
    chunks.push(
      pick.name,
      pick.tagline,
      pick.shortLabel,
      pick.priceGuide,
      ...pick.tags,
      ...pick.features,
      ...pick.recommendedFor,
      ...(pick.cautions ?? []),
    );
  }

  for (const group of article.useCaseGroups ?? []) {
    chunks.push(group.title, group.body);
  }

  for (const block of article.useCases ?? []) {
    chunks.push(block.title, block.productName, block.body ?? "");
  }

  if (article.comparisonTable) {
    chunks.push(article.comparisonTable.title ?? "", ...article.comparisonTable.headers);
    for (const row of article.comparisonTable.rows) {
      chunks.push(...row);
    }
  }

  return chunks;
}

function buildHaystack(article: Article, locale: Locale): string {
  const keywords = collectKeywords(article, locale);
  const raw = [...collectArticleBodyText(article), ...keywords].join(" ");
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

function fieldMatchesAny(field: string, synonyms: string[]): boolean {
  return synonyms.some((token) => containsSearchToken(field, token));
}

function scoreEntry(entry: GlobalSearchEntry, terms: string[]): number {
  const title = normalizeSearchText(entry.title);
  const product = normalizeSearchText(entry.productName);
  const slug = normalizeSearchText(entry.slug.replace(/-/g, " "));
  const category = normalizeSearchText(`${entry.category} ${entry.categoryName}`);
  const excerpt = normalizeSearchText(entry.excerpt);
  const joinedQuery = normalizeSearchText(terms.join(" "));

  let score = 0;

  if (joinedQuery && (title === joinedQuery || product === joinedQuery)) score += 1200;
  if (joinedQuery && title.includes(joinedQuery)) score += 500;
  if (joinedQuery && product.includes(joinedQuery)) score += 450;
  if (joinedQuery && slug.includes(joinedQuery)) score += 400;

  for (const term of terms) {
    const synonyms = getSynonymsForTerm(term);

    if (fieldMatchesAny(title, synonyms)) {
      if (synonyms.some((s) => title === s)) score += 320;
      else if (synonyms.some((s) => title.startsWith(s))) score += 240;
      else score += 180;
    }

    if (fieldMatchesAny(product, synonyms)) {
      if (synonyms.some((s) => product === s)) score += 300;
      else score += 200;
    }

    if (fieldMatchesAny(slug, synonyms)) score += 150;
    if (fieldMatchesAny(category, synonyms)) score += 110;
    if (fieldMatchesAny(excerpt, synonyms)) score += 70;
    if (fieldMatchesAny(entry.haystack, synonyms)) score += 45;
  }

  // Prefer articles that satisfy more user terms with stronger field hits.
  score += terms.length * 80;
  score += Math.max(0, 36 - Math.min(entry.title.length, 36));
  return score;
}

function entryMatchesAllTerms(entry: GlobalSearchEntry, terms: string[]): boolean {
  return terms.every((term) => {
    const synonyms = getSynonymsForTerm(term);
    return synonyms.some((token) => containsSearchToken(entry.haystack, token));
  });
}

export function searchGlobalEntries(
  entries: GlobalSearchEntry[],
  query: string,
  limit: number,
): GlobalSearchEntry[] {
  const terms = parseSearchTerms(query);
  if (terms.length === 0) return [];

  return entries
    .map((entry) => {
      if (!entryMatchesAllTerms(entry, terms)) return null;
      return { entry, score: scoreEntry(entry, terms) };
    })
    .filter((item): item is { entry: GlobalSearchEntry; score: number } => Boolean(item))
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title, "ja"))
    .slice(0, limit)
    .map((item) => item.entry);
}
