import type { MetadataRoute } from "next";
import { categories } from "@/content/categories";
import { getSiteUrl } from "@/content/site";
import { getAllArticles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticPaths = ["", "/about", "/privacy", "/contact", "/affiliate"];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path || "/"}`,
      lastModified: new Date(),
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/category/${category.slug}`,
      lastModified: new Date(),
    })),
    ...getAllArticles().map((article) => ({
      url: `${siteUrl}/picks/${article.slug}`,
      lastModified: new Date(article.publishedAt),
    })),
  ];
}
