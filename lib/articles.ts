import { articles, type Article } from "@/content/articles";
import { getCategory, type CategorySlug } from "@/content/categories";

export function getAllArticles() {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
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

export function getRelatedArticles(article: Article, limit = 2) {
  return getAllArticles()
    .filter((item) => item.slug !== article.slug && item.category === article.category)
    .concat(
      getAllArticles().filter(
        (item) => item.slug !== article.slug && item.category !== article.category,
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
