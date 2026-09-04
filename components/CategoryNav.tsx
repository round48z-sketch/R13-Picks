"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories } from "@/content/categories";
import { getUi } from "@/content/i18n/ui";
import { getLocaleFromPathname, localizePath } from "@/lib/i18n/path";

export function CategoryNav() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getUi(locale);

  return (
    <nav className="category-nav" aria-label={ui.categoryNavAria}>
      {categories.map((category) => (
        <Link key={category.slug} href={localizePath(`/category/${category.slug}`, locale)}>
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
