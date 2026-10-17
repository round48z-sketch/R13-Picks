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
  /** Public path under /public, or null for the CSS placeholder. Desktop (≥720px). */
  imageSrc: "/images/home/hero.jpg" as string | null,
  /** Portrait art for mobile (≤719px). Falls back to `imageSrc` when null. */
  mobileImageSrc: "/images/home/hero-mobile.jpg" as string | null,
  /**
   * CSS object-position for the desktop image.
   * Bias to the right so the subject (woman) stays in frame.
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
