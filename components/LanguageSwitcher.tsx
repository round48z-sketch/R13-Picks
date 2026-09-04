"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  LOCALE_STORAGE_KEY,
  localeLabels,
  locales,
  type Locale,
} from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { getLocaleFromPathname, localizePath, stripLocalePrefix } from "@/lib/i18n/path";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getUi(locale);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore storage failures
    }
  }, [locale]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const barePath = stripLocalePrefix(pathname);

  function hrefFor(next: Locale) {
    return localizePath(barePath, next);
  }

  return (
    <div className={`language-switcher ${open ? "is-open" : ""}`} ref={rootRef}>
      <button
        type="button"
        className="language-switcher__button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ui.languageMenuAria}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="language-switcher__icon" aria-hidden="true">
          🌐
        </span>
        <span className="language-switcher__code">{locale.toUpperCase()}</span>
      </button>
      {open ? (
        <ul className="language-switcher__menu" role="listbox" aria-label={ui.languageMenuAria}>
          {locales.map((item) => (
            <li key={item} role="option" aria-selected={item === locale}>
              <Link
                href={hrefFor(item)}
                className={item === locale ? "is-active" : undefined}
                hrefLang={item === "zh" ? "zh-CN" : item}
                onClick={() => {
                  try {
                    window.localStorage.setItem(LOCALE_STORAGE_KEY, item);
                  } catch {
                    // ignore
                  }
                  setOpen(false);
                }}
              >
                {localeLabels[item]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
