"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { localeHtmlLang } from "@/content/i18n/config";
import { getLocaleFromPathname } from "@/lib/i18n/path";

/** Keeps <html lang> in sync for prefixed locales (root layout defaults to ja). */
export function HtmlLang() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  return null;
}
