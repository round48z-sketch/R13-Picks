import type { Article } from "@/content/articles";

/** Translatable fields of an article. Shared fields (slug, image src/size, dates, category) stay on the base article. */
export type ArticleTranslation = {
  title: string;
  seoTitle: string;
  description: string;
  productType?: string;
  excerpt: string;
  intro: string;
  pointsTitle?: string;
  points: string[];
  sections?: { title: string; body: string }[];
  design?: string;
  pairing?: string;
  recommendedTitle?: string;
  recommendedFor: string[];
  scenes?: string[];
  summary?: string;
  note?: string;
  ctaLabel: string;
  imageAlt: string;
};

export type LocalizedArticle = Article;
