import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  homeHeroConfig,
  homeHeroImageAlt,
} from "@/content/home-hero";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { localizePath } from "@/lib/i18n/path";

type HomeHeroProps = {
  locale?: Locale;
};

/** Split JA headline into the intended two phrases; other locales stay as one string. */
function renderHomeHeroHeadline(locale: Locale, headline: string) {
  if (locale !== "ja") {
    return headline;
  }

  const parts = headline
    .split("。")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return headline;
  }

  return (
    <>
      <span className="home-hero__headline-line">{parts[0]}。</span>
      <span className="home-hero__headline-line">{parts.slice(1).join("。")}。</span>
    </>
  );
}

export function HomeHero({ locale = "ja" }: HomeHeroProps) {
  const ui = getUi(locale);
  const hasImage = Boolean(homeHeroConfig.imageSrc);
  const ctaHref = localizePath(`/picks/${homeHeroConfig.ctaArticleSlug}`, locale);
  const hasScript = Boolean(ui.homeHeroScriptLine1 && ui.homeHeroScriptLine2);

  return (
    <section
      className="home-hero"
      aria-label={ui.homeHeroAria}
      style={
        {
          "--home-hero-object-position": homeHeroConfig.objectPosition,
        } as CSSProperties
      }
    >
      <div
        className={
          hasImage
            ? "home-hero__media home-hero__media--image"
            : "home-hero__media home-hero__media--placeholder"
        }
        aria-hidden={hasImage ? undefined : true}
      >
        {hasImage && homeHeroConfig.imageSrc ? (
          <Image
            src={homeHeroConfig.imageSrc}
            alt={homeHeroImageAlt[locale]}
            fill
            priority
            sizes="100vw"
            className="home-hero__image"
          />
        ) : null}
        <div className="home-hero__veil" />
      </div>

      <div className="home-hero__inner">
        <div className="home-hero__copy">
          <p className="home-hero__brand">
            <span className="site-brand__r13">R13</span>
            <span className="site-brand__picks">Picks</span>
          </p>
          <h1 className="home-hero__headline">
            {renderHomeHeroHeadline(locale, ui.homeHeroHeadline)}
          </h1>
          <p className="home-hero__lead">{ui.homeHeroLead}</p>
          <div className="home-hero__actions">
            <Link href={ctaHref} className="home-hero__cta">
              {ui.homeHeroCta}
            </Link>
          </div>
        </div>

        {hasScript ? (
          <aside className="home-hero__script" aria-hidden="true">
            <p className="home-hero__script-text">
              <span className="home-hero__script-line">{ui.homeHeroScriptLine1}</span>
              <span className="home-hero__script-line">{ui.homeHeroScriptLine2}</span>
            </p>
            <svg
              className="home-hero__script-curve"
              viewBox="0 0 180 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M4 12 C 40 4, 90 16, 176 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </aside>
        ) : null}
      </div>
    </section>
  );
}
