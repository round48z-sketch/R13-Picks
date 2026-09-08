import type {
  Article,
  ComparisonTable,
  RoundupPick,
  UseCaseBlock,
} from "@/content/articles";

/** Translatable fields of a roundup pick. Image stays on the base JA article. */
export type RoundupPickTranslation = Omit<RoundupPick, "image">;

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
  overviewTitle?: string;
  comparisonTable?: ComparisonTable;
  picksTitle?: string;
  picks?: RoundupPickTranslation[];
  pickFeaturesLabel?: string;
  pickRecommendedLabel?: string;
  useCasesTitle?: string;
  useCases?: UseCaseBlock[];
};

export type LocalizedArticle = Article;
