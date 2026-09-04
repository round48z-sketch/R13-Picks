import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { locales } from "@/content/i18n/config";
import { getSiteUrl } from "@/content/site";
import { getAllArticles } from "@/lib/articles";
import { localizePath } from "@/lib/i18n/path";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticPaths = ["/", "/about", "/privacy", "/contact", "/affiliate"];
  const articles = getAllArticles();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      const localized = localizePath(path, locale);
      entries.push({
        url: `${siteUrl}${localized === "/" ? "/" : localized}`,
        lastModified: new Date(),
      });
    }

    for (const category of categories) {
      entries.push({
        url: `${siteUrl}${localizePath(`/category/${category.slug}`, locale)}`,
        lastModified: new Date(),
      });
    }

    for (const article of articles) {
      entries.push({
        url: `${siteUrl}${localizePath(`/picks/${article.slug}`, locale)}`,
        lastModified: new Date(article.publishedAt),
      });
    }
  }

  return entries;
}
