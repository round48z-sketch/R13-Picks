import {
  defaultLocale,
  isPrefixedLocale,
  type Locale,
  type PrefixedLocale,
} from "@/content/i18n/config";

/**
 * Strip a leading /en|/ko|/zh prefix from a pathname.
 * Japanese paths are returned unchanged.
 */
export function stripLocalePrefix(pathname: string): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const match = normalized.match(/^\/(en|ko|zh)(?=\/|$)/);
  if (!match) {
    return normalized === "" ? "/" : normalized;
  }
  const rest = normalized.slice(match[0].length);
  return rest === "" ? "/" : rest;
}

/** Detect locale from a pathname. Default is Japanese. */
export function getLocaleFromPathname(pathname: string): Locale {
  const match = pathname.match(/^\/(en|ko|zh)(?=\/|$)/);
  if (match && isPrefixedLocale(match[1])) {
    return match[1];
  }
  return defaultLocale;
}

/**
 * Build a localized path.
 * JA: /picks/foo
 * EN: /en/picks/foo
 */
export function localizePath(path: string, locale: Locale): string {
  const bare = stripLocalePrefix(path);
  const normalized = bare === "/" ? "/" : bare.startsWith("/") ? bare : `/${bare}`;

  if (locale === defaultLocale) {
    return normalized;
  }

  if (normalized === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalized}`;
}

/** Absolute path helpers for sitemap / metadata */
export function localizedUrlPath(path: string, locale: Locale): string {
  return localizePath(path, locale);
}

export function getAlternateLanguagePaths(path: string): Record<string, string> {
  const bare = stripLocalePrefix(path);
  return {
    ja: localizePath(bare, "ja"),
    en: localizePath(bare, "en"),
    ko: localizePath(bare, "ko"),
    "zh-CN": localizePath(bare, "zh"),
    "x-default": localizePath(bare, "ja"),
  };
}

export function assertPrefixedLocale(locale: string): PrefixedLocale {
  if (!isPrefixedLocale(locale)) {
    throw new Error(`Invalid prefixed locale: ${locale}`);
  }
  return locale;
}
