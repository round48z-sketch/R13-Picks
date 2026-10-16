"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { localizePath } from "@/lib/i18n/path";

export type HeroSlide = {
  slug: string;
  title: string;
  excerpt: string;
  categoryName: string;
  image: { src: string; alt: string };
  isRoundupThumb: boolean;
};

type HeroCarouselProps = {
  slides: HeroSlide[];
  locale?: Locale;
};

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 48;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function HeroCarousel({ slides, locale = "ja" }: HeroCarouselProps) {
  const ui = getUi(locale);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [userEnabled, setUserEnabled] = useState(true);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const touchStartX = useRef<number | null>(null);
  const rootRef = useRef<HTMLElement>(null);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  const autoplayOn = userEnabled && !reducedMotion && !paused && count > 1;

  useEffect(() => {
    if (!autoplayOn) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplayOn, count, index]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (!root.contains(document.activeElement)) return;
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  if (count === 0) return null;

  return (
    <section
      ref={rootRef}
      className="hero-carousel"
      aria-roledescription="carousel"
      aria-label={ui.heroCarouselAria}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        const next = event.relatedTarget;
        if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
          setPaused(false);
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null;
        setPaused(true);
      }}
      onTouchEnd={(event) => {
        const start = touchStartX.current;
        const end = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        setPaused(false);
        if (start == null || end == null) return;
        const delta = end - start;
        if (Math.abs(delta) < SWIPE_THRESHOLD) return;
        if (delta > 0) goPrev();
        else goNext();
      }}
    >
      <h2 className="sr-only">{ui.heroCarouselTitle}</h2>

      <div className="hero-carousel__viewport">
        <div
          className="hero-carousel__track"
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {slides.map((slide, slideIndex) => {
            const current = slideIndex === index;
            return (
              <div
                key={slide.slug}
                className="hero-carousel__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} / ${count}`}
                aria-hidden={current ? undefined : true}
              >
                <Link
                  href={localizePath(`/picks/${slide.slug}`, locale)}
                  className="hero-carousel__link"
                  tabIndex={current ? 0 : -1}
                  aria-current={current ? "true" : undefined}
                >
                  <div
                    className={
                      slide.isRoundupThumb
                        ? "hero-carousel__media hero-carousel__media--roundup"
                        : "hero-carousel__media"
                    }
                  >
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      sizes="(max-width: 979px) 100vw, 560px"
                      priority={slideIndex === 0}
                      style={{ objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                  <div className="hero-carousel__copy">
                    <p className="hero-carousel__eyebrow">{slide.categoryName}</p>
                    <p className="hero-carousel__title">{slide.title}</p>
                    <p className="hero-carousel__excerpt">{slide.excerpt}</p>
                    <span className="hero-carousel__cta">{ui.readMore}</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {count > 1 ? (
        <>
          <div className="hero-carousel__arrows">
            <button
              type="button"
              className="hero-carousel__arrow"
              aria-label={ui.heroCarouselPrev}
              onClick={goPrev}
            >
              <Chevron direction="prev" />
            </button>
            <button
              type="button"
              className="hero-carousel__arrow"
              aria-label={ui.heroCarouselNext}
              onClick={goNext}
            >
              <Chevron direction="next" />
            </button>
          </div>

          <div className="hero-carousel__footer">
            <div className="hero-carousel__dots" role="group" aria-label={ui.heroCarouselDotsAria}>
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.slug}
                  type="button"
                  className={
                    slideIndex === index
                      ? "hero-carousel__dot hero-carousel__dot--active"
                      : "hero-carousel__dot"
                  }
                  aria-label={`${slideIndex + 1}${ui.heroCarouselDotSuffix}`}
                  aria-current={slideIndex === index ? "true" : undefined}
                  onClick={() => goTo(slideIndex)}
                />
              ))}
            </div>
            {reducedMotion ? (
              <p className="hero-carousel__hint">{ui.heroCarouselReducedMotion}</p>
            ) : (
              <button
                type="button"
                className="hero-carousel__autoplay"
                aria-pressed={!userEnabled}
                aria-label={userEnabled ? ui.heroCarouselPause : ui.heroCarouselPlay}
                onClick={() => setUserEnabled((enabled) => !enabled)}
              >
                {userEnabled ? "Pause" : "Play"}
              </button>
            )}
          </div>
        </>
      ) : null}
    </section>
  );
}

function Chevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-carousel__chevron">
      {direction === "prev" ? (
        <path
          d="M14.5 5.5 8 12l6.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      ) : (
        <path
          d="M9.5 5.5 16 12l-6.5 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      )}
    </svg>
  );
}
