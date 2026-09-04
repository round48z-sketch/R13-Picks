export const locales = ["ja", "en", "ko", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

/** Locales that appear as URL prefixes (/en, /ko, /zh). Japanese stays unprefixed. */
export const prefixedLocales = ["en", "ko", "zh"] as const;

export type PrefixedLocale = (typeof prefixedLocales)[number];

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  ko: "한국어",
  zh: "简体中文",
};

export const localeHtmlLang: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  ko: "ko",
  zh: "zh-CN",
};

export const localeOgLocale: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  ko: "ko_KR",
  zh: "zh_CN",
};

export const localeIntl: Record<Locale, string> = {
  ja: "ja-JP",
  en: "en-US",
  ko: "ko-KR",
  zh: "zh-CN",
};

/** hreflang values used in alternates.languages */
export const hreflangMap: Record<Locale, string> = {
  ja: "ja",
  en: "en",
  ko: "ko",
  zh: "zh-CN",
};

export const LOCALE_STORAGE_KEY = "r13-picks-locale";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function isPrefixedLocale(value: string): value is PrefixedLocale {
  return (prefixedLocales as readonly string[]).includes(value);
}
