"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { categories } from "@/content/categories";
import { getCategoryCopy } from "@/content/i18n/categories";
import { siteConfig } from "@/content/site";
import { getUi } from "@/content/i18n/ui";
import { getLocaleFromPathname, localizePath } from "@/lib/i18n/path";

export function Header() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getUi(locale);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const homeHref = localizePath("/", locale);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href={homeHref} className="logo" onClick={() => setOpen(false)}>
            {siteConfig.logo}
          </Link>
          <div className="site-header__actions">
            <nav className="desktop-nav" aria-label={ui.mainNavAria}>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={localizePath(`/category/${category.slug}`, locale)}
                >
                  {category.name}
                </Link>
              ))}
              <Link href={localizePath("/about", locale)}>{ui.aboutShort}</Link>
            </nav>
            <LanguageSwitcher />
            <button
              type="button"
              className={`menu-button ${open ? "is-open" : ""}`}
              aria-label={open ? ui.closeMenu : ui.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="mobile-menu">
          <nav aria-label={ui.mobileNavAria}>
            {categories.map((category) => {
              const copy = getCategoryCopy(locale, category.slug);
              return (
                <Link
                  key={category.slug}
                  href={localizePath(`/category/${category.slug}`, locale)}
                  onClick={() => setOpen(false)}
                >
                  {category.name}
                  <span>{copy.localName}</span>
                </Link>
              );
            })}
            <Link href={localizePath("/about", locale)} onClick={() => setOpen(false)}>
              {ui.aboutShort}
              <span>{ui.about}</span>
            </Link>
            <Link href={localizePath("/contact", locale)} onClick={() => setOpen(false)}>
              {ui.contactShort}
              <span>{ui.contact}</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
