"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/content/categories";
import { siteConfig } from "@/content/site";
import { getUi } from "@/content/i18n/ui";
import { getLocaleFromPathname, localizePath } from "@/lib/i18n/path";

export function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getUi(locale);

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link href={localizePath("/", locale)} className="logo">
          {siteConfig.logo}
        </Link>
        <p className="site-footer__tagline">{siteConfig.tagline}</p>
        <nav className="footer-nav" aria-label={ui.footerNavAria}>
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={localizePath(`/category/${category.slug}`, locale)}
            >
              {category.name}
            </Link>
          ))}
          <Link href={localizePath("/about", locale)}>{ui.about}</Link>
          <Link href={localizePath("/affiliate", locale)}>{ui.affiliate}</Link>
          <Link href={localizePath("/privacy", locale)}>{ui.privacy}</Link>
          <Link href={localizePath("/contact", locale)}>{ui.contact}</Link>
        </nav>
        <p className="site-footer__copy">© {new Date().getFullYear()} R13 Picks</p>
      </div>
    </footer>
  );
}
