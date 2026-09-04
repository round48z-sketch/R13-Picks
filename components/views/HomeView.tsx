import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import type { Locale } from "@/content/i18n/config";
import { getSiteDescription } from "@/content/i18n/site";
import { getUi } from "@/content/i18n/ui";
import { siteConfig } from "@/content/site";
import { getAllArticles } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";

export function HomeView({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const latest = getAllArticles().map((article) => localizeArticle(article, locale));

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="brand-mark" aria-hidden="true">
            R13
          </div>
          <p className="logo">{siteConfig.logo}</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </section>

      <div className="container">
        <CategoryNav />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">{ui.newPicksLabel}</p>
            <h2>{ui.newPicksTitle}</h2>
          </div>
          <div className="card-grid">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Keep description helper available for metadata callers
export function getHomeDescription(locale: Locale) {
  return getSiteDescription(locale);
}
