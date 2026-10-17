"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { Article } from "@/content/articles";
import type { CategorySlug } from "@/content/categories";
import { getCategoryCopy } from "@/content/i18n/categories";
import type { Locale } from "@/content/i18n/config";
import { localeIntl } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import {
  formatDate,
  getArticleCategory,
  getArticleThumbnail,
} from "@/lib/articles";
import { localizePath } from "@/lib/i18n/path";

type FeaturedStoriesProps = {
  articles: Article[];
  locale?: Locale;
};

const ROUNDUP_SLUGS = new Set([
  "beauty-appliances-5-picks",
  "desk-setup-5-picks",
  "wireless-earbuds-under-10000",
  "refurbished-laptops-5-picks",
  "womens-watches-7-picks",
  "gadgets-under-10000-recommendations-10",
  "mouse-recommendations-10",
]);

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isRoundupThumb(article: Article) {
  return Boolean(article.guideThumbnailImage) || ROUNDUP_SLUGS.has(article.slug);
}

export function FeaturedStories({ articles, locale = "ja" }: FeaturedStoriesProps) {
  const ui = getUi(locale);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const focusedRef = useRef(false);
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 5000,
        playOnInit: false,
        stopOnInteraction: true,
        stopOnMouseEnter: false,
        stopOnFocusIn: false,
      }),
    [],
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", duration: 32 },
    [autoplay],
  );
  const [selected, setSelected] = useState(0);
  const [userEnabled, setUserEnabled] = useState(true);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const autoplayEnabled = userEnabled && !reducedMotion;

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    const frame = requestAnimationFrame(onSelect);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const sync = useCallback(
    (next?: { hovering?: boolean; dragging?: boolean; focused?: boolean }) => {
      if (next?.hovering !== undefined) hoveringRef.current = next.hovering;
      if (next?.dragging !== undefined) draggingRef.current = next.dragging;
      if (next?.focused !== undefined) focusedRef.current = next.focused;
      const plugin = emblaApi?.plugins()?.autoplay;
      if (!plugin) return;
      const shouldPlay =
        autoplayEnabled &&
        !hoveringRef.current &&
        !draggingRef.current &&
        !focusedRef.current &&
        document.visibilityState === "visible";
      if (shouldPlay) plugin.play();
      else plugin.stop();
    },
    [autoplayEnabled, emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onPointerDown = () => sync({ dragging: true });
    const onPointerUp = () => sync({ dragging: false });
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);
    sync();
    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi, sync]);

  useEffect(() => {
    const onVisibility = () => sync();
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [sync]);

  useEffect(() => {
    sync();
  }, [sync, userEnabled, reducedMotion]);

  if (articles.length === 0) return null;

  return (
    <section
      className="section section--home-editorial featured-stories"
      id="featured-stories"
      aria-roledescription="carousel"
      aria-label={ui.featuredStoriesAria}
      onMouseEnter={() => sync({ hovering: true })}
      onMouseLeave={() => sync({ hovering: false })}
      onFocusCapture={() => sync({ focused: true })}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          sync({ focused: false });
        }
      }}
    >
      <div className="container">
        <div className="section-head section-head--editorial">
          <p className="section-label">{ui.featuredStoriesLabel}</p>
          <h2>{ui.featuredStoriesTitle}</h2>
          <p className="section-lead">{ui.featuredStoriesLead}</p>
        </div>
      </div>

      <div className="featured-stories__stage">
        <div className="featured-stories__viewport" ref={emblaRef}>
          <div className="featured-stories__track">
            {articles.map((article, index) => {
              const category = getArticleCategory(article);
              const categoryCopy = category
                ? getCategoryCopy(locale, category.slug as CategorySlug)
                : null;
              const thumbnail =
                article.guideThumbnailImage ?? getArticleThumbnail(article);
              const roundup = isRoundupThumb(article);
              const href = localizePath(`/picks/${article.slug}`, locale);
              const current = index === selected;

              return (
                <div
                  key={article.slug}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} / ${articles.length}`}
                  className="featured-stories__slide"
                >
                  <Link
                    href={href}
                    className={
                      current
                        ? "featured-stories__card is-current"
                        : "featured-stories__card"
                    }
                    aria-current={current ? "true" : undefined}
                  >
                    <div
                      className={
                        roundup
                          ? "featured-stories__media featured-stories__media--roundup"
                          : "featured-stories__media"
                      }
                    >
                      <Image
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                        fill
                        sizes="(min-width: 1024px) 70vw, 86vw"
                        priority={index === 0}
                        unoptimized={thumbnail.src.includes(
                          "thumbnail.image.rakuten.co.jp/@0_gold/",
                        )}
                        style={
                          roundup
                            ? { objectFit: "contain", objectPosition: "center" }
                            : { objectFit: "cover", objectPosition: "center" }
                        }
                      />
                      <div className="featured-stories__shade" aria-hidden="true" />
                      <div className="featured-stories__copy">
                        <p className="featured-stories__meta">
                          <span>{category?.name}</span>
                          {categoryCopy?.localName ? (
                            <span className="featured-stories__meta-local">
                              {categoryCopy.localName}
                            </span>
                          ) : null}
                        </p>
                        <p className="featured-stories__title">{article.title}</p>
                        <time
                          dateTime={article.publishedAt}
                          className="featured-stories__date"
                        >
                          {formatDate(article.publishedAt, localeIntl[locale])}
                        </time>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="featured-stories__arrows" aria-hidden="false">
          <button
            type="button"
            className="featured-stories__arrow"
            aria-label={ui.featuredStoriesPrev}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ArrowIcon direction="prev" />
          </button>
          <button
            type="button"
            className="featured-stories__arrow"
            aria-label={ui.featuredStoriesNext}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>
      </div>

      <div className="featured-stories__footer">
        <div
          className="featured-stories__dots"
          role="group"
          aria-label={ui.featuredStoriesDotsAria}
        >
          {articles.map((article, index) => (
            <button
              key={article.slug}
              type="button"
              aria-label={ui.featuredStoriesDotLabel.replace(
                "{n}",
                String(index + 1),
              )}
              aria-current={index === selected}
              onClick={() => emblaApi?.scrollTo(index)}
              className={
                index === selected
                  ? "featured-stories__dot is-active"
                  : "featured-stories__dot"
              }
            />
          ))}
        </div>
        {reducedMotion ? (
          <p className="featured-stories__hint">{ui.featuredStoriesReducedMotion}</p>
        ) : (
          <button
            type="button"
            className="featured-stories__autoplay"
            aria-pressed={!userEnabled}
            aria-label={
              userEnabled ? ui.featuredStoriesPauseAria : ui.featuredStoriesPlayAria
            }
            onClick={() => setUserEnabled((enabled) => !enabled)}
          >
            {userEnabled ? ui.featuredStoriesPause : ui.featuredStoriesPlay}
          </button>
        )}
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d={direction === "prev" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
