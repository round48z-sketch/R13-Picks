"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/content/categories";
import { siteConfig } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            {siteConfig.logo}
          </Link>
          <nav className="desktop-nav" aria-label="メインメニュー">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                {category.name}
              </Link>
            ))}
            <Link href="/about">About</Link>
          </nav>
          <button
            type="button"
            className={`menu-button ${open ? "is-open" : ""}`}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      {open ? (
        <div className="mobile-menu">
          <nav aria-label="モバイルメニュー">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                onClick={() => setOpen(false)}
              >
                {category.name}
                <span>{category.ja}</span>
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)}>
              About
              <span>R13 Picksについて</span>
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
              <span>お問い合わせ</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
