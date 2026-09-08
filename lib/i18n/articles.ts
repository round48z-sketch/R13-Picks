import type { Article, RoundupPick } from "@/content/articles";
import type { Locale } from "@/content/i18n/config";
import type { ArticleTranslation, RoundupPickTranslation } from "@/content/i18n/article-types";
import { articleTranslationsEn } from "@/content/i18n/articles-en";
import { articleTranslationsKo } from "@/content/i18n/articles-ko";
import { articleTranslationsZh } from "@/content/i18n/articles-zh";

const translationMaps: Record<Exclude<Locale, "ja">, Record<string, ArticleTranslation>> = {
  en: articleTranslationsEn,
  ko: articleTranslationsKo,
  zh: articleTranslationsZh,
};

function mergeRoundupPicks(
  basePicks: RoundupPick[] | undefined,
  translated: RoundupPickTranslation[] | undefined,
): RoundupPick[] | undefined {
  if (!translated) {
    return basePicks;
  }
  if (!basePicks) {
    return undefined;
  }

  return translated.map((pick) => {
    const basePick = basePicks.find((item) => item.slug === pick.slug);
    return {
      ...pick,
      image: basePick?.image ?? {
        src: "",
        alt: pick.name,
        width: 1008,
        height: 1792,
      },
    };
  });
}

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
    overviewTitle: translation.overviewTitle ?? article.overviewTitle,
    comparisonTable: translation.comparisonTable ?? article.comparisonTable,
    picksTitle: translation.picksTitle ?? article.picksTitle,
    picks: mergeRoundupPicks(article.picks, translation.picks),
    pickFeaturesLabel: translation.pickFeaturesLabel ?? article.pickFeaturesLabel,
    pickRecommendedLabel: translation.pickRecommendedLabel ?? article.pickRecommendedLabel,
    useCasesTitle: translation.useCasesTitle ?? article.useCasesTitle,
    useCases: translation.useCases ?? article.useCases,
    image: {
      ...article.image,
      alt: translation.imageAlt,
    },
  };
}
