"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { isSearchTermUsable } from "@/content/search-keywords";
import {
  searchGlobalEntries,
  type GlobalSearchEntry,
} from "@/lib/search-index";
import { localizePath } from "@/lib/i18n/path";

type GlobalSearchProps = {
  entries: GlobalSearchEntry[];
  locale?: Locale;
  /** Visual variant; logic is identical. */
  variant?: "default" | "hero";
};

const DESKTOP_LIMIT = 12;
const MOBILE_LIMIT = 10;

function useResultLimit() {
  const [limit, setLimit] = useState(DESKTOP_LIMIT);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 719px)");
    const sync = () => setLimit(media.matches ? MOBILE_LIMIT : DESKTOP_LIMIT);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return limit;
}

export function GlobalSearch({
  entries,
  locale = "ja",
  variant = "default",
}: GlobalSearchProps) {
  const ui = getUi(locale);
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const limit = useResultLimit();
  const isHero = variant === "hero";

  const results = useMemo(
    () => searchGlobalEntries(entries, query, limit),
    [entries, limit, query],
  );

  const showPanel = open && isSearchTermUsable(query.replace(/\s+/g, ""));

  useEffect(() => {
    setActiveIndex(-1);
  }, [query, limit]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (activeIndex >= 0 && results[activeIndex]) {
      window.location.href = localizePath(`/picks/${results[activeIndex].slug}`, locale);
      return;
    }
    if (results[0]) {
      window.location.href = localizePath(`/picks/${results[0].slug}`, locale);
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!showPanel || results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => (current + 1) % results.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) =>
        current <= 0 ? results.length - 1 : current - 1,
      );
    }
  }

  function clearSearch() {
    setQuery("");
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }

  return (
    <div
      className={isHero ? "global-search global-search--hero" : "global-search"}
      ref={rootRef}
    >
      <form className="global-search__form" role="search" onSubmit={handleSubmit}>
        <label className="global-search__field">
          <span className="sr-only">{ui.globalSearchAria}</span>
          <span className="global-search__icon" aria-hidden="true">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={ui.globalSearchPlaceholder}
            aria-label={ui.globalSearchAria}
            aria-controls={listId}
            aria-expanded={showPanel}
            aria-autocomplete="list"
            aria-activedescendant={
              activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined
            }
            autoComplete="off"
            enterKeyHint="search"
            className="global-search__input"
          />
          {query.trim() ? (
            <button
              type="button"
              className="global-search__clear"
              aria-label={ui.globalSearchClearAria}
              onClick={clearSearch}
            >
              <ClearIcon />
            </button>
          ) : null}
          {isHero ? (
            <button
              type="submit"
              className="global-search__submit"
              aria-label={ui.globalSearchAria}
            >
              <ArrowIcon />
            </button>
          ) : null}
        </label>
      </form>

      {showPanel ? (
        <div className="global-search__panel" id={listId} role="listbox" aria-label={ui.globalSearchAria}>
          {results.length > 0 ? (
            <ul className="global-search__list">
              {results.map((entry, index) => (
                <li key={entry.slug} role="presentation">
                  <Link
                    id={`${listId}-option-${index}`}
                    href={localizePath(`/picks/${entry.slug}`, locale)}
                    role="option"
                    aria-selected={index === activeIndex}
                    className={
                      index === activeIndex
                        ? "global-search__item is-active"
                        : "global-search__item"
                    }
                    onClick={() => {
                      setOpen(false);
                      setActiveIndex(-1);
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className="global-search__thumb">
                      <Image
                        src={entry.image.src}
                        alt=""
                        fill
                        sizes="64px"
                        style={{ objectFit: "contain", objectPosition: "center" }}
                      />
                    </span>
                    <span className="global-search__copy">
                      <span className="global-search__category">{entry.categoryName}</span>
                      <span className="global-search__title">{entry.title}</span>
                      <span className="global-search__excerpt">{entry.excerpt}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="global-search__empty">{ui.globalSearchEmpty}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle
        cx="11"
        cy="11"
        r="6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M16.2 16.2 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M7 7l10 10M17 7 7 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
