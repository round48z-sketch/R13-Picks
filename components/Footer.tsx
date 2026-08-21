import Link from "next/link";
import { categories } from "@/content/categories";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link href="/" className="logo">
          {siteConfig.logo}
        </Link>
        <p className="site-footer__tagline">{siteConfig.tagline}</p>
        <nav className="footer-nav" aria-label="フッター">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              {category.name}
            </Link>
          ))}
          <Link href="/about">R13 Picksについて</Link>
          <Link href="/affiliate">広告・アフィリエイトについて</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>
        <p className="site-footer__copy">© {new Date().getFullYear()} R13 Picks</p>
      </div>
    </footer>
  );
}
