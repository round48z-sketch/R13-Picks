import type { Article } from "@/content/articles";
import type { Locale } from "@/content/i18n/config";
import type { ArticleTranslation } from "@/content/i18n/article-types";
import { articleTranslationsEn } from "@/content/i18n/articles-en";
import { articleTranslationsKo } from "@/content/i18n/articles-ko";
import { articleTranslationsZh } from "@/content/i18n/articles-zh";

const translationMaps: Record<Exclude<Locale, "ja">, Record<string, ArticleTranslation>> = {
  en: articleTranslationsEn,
  ko: articleTranslationsKo,
  zh: articleTranslationsZh,
};

export function localizeArticle(article: Article, locale: Locale): Article {
  if (locale === "ja") {
    return article;
  }

  const translation = translationMaps[locale][article.slug];
  if (!translation) {
    return article;
  }

  return {
    ...article,
    title: translation.title,
    seoTitle: translation.seoTitle,
    description: translation.description,
    productType: translation.productType ?? article.productType,
    excerpt: translation.excerpt,
    intro: translation.intro,
    pointsTitle: translation.pointsTitle,
    points: translation.points,
    sections: translation.sections,
    design: translation.design,
    pairing: translation.pairing,
    recommendedTitle: translation.recommendedTitle,
    recommendedFor: translation.recommendedFor,
    scenes: translation.scenes,
    summary: translation.summary,
    note: translation.note,
    ctaLabel: translation.ctaLabel,
    image: {
      ...article.image,
      alt: translation.imageAlt,
    },
  };
}
