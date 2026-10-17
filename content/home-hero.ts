import type { Locale } from "@/content/i18n/config";

/**
 * Homepage media hero configuration.
 *
 * To swap in a portrait / lifestyle photo later:
 * 1. Place the file under `public/images/home/` (e.g. `hero.jpg`)
 * 2. Set `imageSrc` to that public path (e.g. "/images/home/hero.jpg")
 * 3. Adjust `objectPosition` if the subject needs framing
 *
 * While `imageSrc` is null, the UI uses a CSS placeholder background only.
 */
export const homeHeroConfig = {
  /** Public path under /public, or null for the CSS placeholder. */
  imageSrc: "/images/home/hero.jpg" as string | null,
  /**
   * CSS object-position when an image is set.
   * Bias to the right so the subject (woman) stays in frame;
   * mobile framing is refined further in `.home-hero` CSS.
   */
  objectPosition: "78% 30%",
  /**
   * Primary CTA target: an existing published article slug.
   * Keep this as a valid `/picks/[slug]` destination.
   */
  ctaArticleSlug: "mens-watch-recommendations-10",
} as const;

export const homeHeroImageAlt: Record<Locale, string> = {
  ja: "R13 Picksのヒーロービジュアル",
  en: "R13 Picks hero visual",
  ko: "R13 Picks 히어로 비주얼",
  zh: "R13 Picks 首页主视觉",
};
