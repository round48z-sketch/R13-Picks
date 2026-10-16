import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { GlobalSearch } from "@/components/GlobalSearch";
import { GuideCard } from "@/components/GuideCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PopularGuideTabs } from "@/components/PopularGuideTabs";
import { getCategory } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import { getSiteDescription } from "@/content/i18n/site";
import { getUi } from "@/content/i18n/ui";
import { siteConfig } from "@/content/site";
import {
  getAllArticles,
  getArticleCategory,
  getArticleThumbnail,
  getHeroCarouselArticles,
  getPopularGuideTabs,
} from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";
import { localizePath } from "@/lib/i18n/path";
import { buildGlobalSearchIndex } from "@/lib/search-index";

const POPULAR_GUIDES_PER_TAB = 4;

const ROUNDUP_HERO_SLUGS = new Set([
  "beauty-appliances-5-picks",
  "desk-setup-5-picks",
  "wireless-earbuds-under-10000",
  "refurbished-laptops-5-picks",
]);

export function HomeView({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const latest = getAllArticles().map((article) => localizeArticle(article, locale));
  const popularGuideTabs = getPopularGuideTabs().map((tab) => ({
    category: tab.category,
    articles: tab.articles.map((article) => localizeArticle(article, locale)),
  }));
  const searchEntries = buildGlobalSearchIndex(locale);
  const heroSlides = getHeroCarouselArticles().map((article) => {
    const localized = localizeArticle(article, locale);
    // Prefer listing/guide collage so the hero shows the same visual as cards.
    const thumbnail =
      localized.guideThumbnailImage ??
      localized.thumbnailImage ??
      getArticleThumbnail(localized);
    const category = getArticleCategory(localized);
    const isRoundupThumb =
      Boolean(localized.guideThumbnailImage) ||
      Boolean(localized.thumbnailImage) ||
      ROUNDUP_HERO_SLUGS.has(localized.slug);
    return {
      slug: localized.slug,
      title: localized.title,
      excerpt: localized.excerpt,
      categoryName: category?.name ?? localized.category,
      image: {
        src: thumbnail.src,
        alt: thumbnail.alt || localized.title,
      },
      isRoundupThumb,
    };
  });

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
        <HeroCarousel slides={heroSlides} locale={locale} />
      </div>

      <div className="container">
        <GlobalSearch entries={searchEntries} locale={locale} />
      </div>

      <div className="container">
        <CategoryNav />
      </div>

      <section className="section section--guides">
        <div className="container">
          <div className="section-head section-head--guides">
            <p className="section-label">{ui.popularGuidesLabel}</p>
            <h2>{ui.popularGuidesTitle}</h2>
            <p className="section-lead">{ui.popularGuidesLead}</p>
          </div>
          <PopularGuideTabs
            ariaLabel={ui.popularGuidesTabsAria}
            defaultId="watch"
            tabs={popularGuideTabs.map((tab) => ({
              id: tab.category,
              label: getCategory(tab.category)?.name ?? tab.category,
              panel: (
                <>
                  <div className="guide-grid guide-grid--tabbed">
                    {tab.articles.slice(0, POPULAR_GUIDES_PER_TAB).map((article) => (
                      <GuideCard key={article.slug} article={article} locale={locale} />
                    ))}
                  </div>
                  {tab.articles.length > POPULAR_GUIDES_PER_TAB ? (
                    <div className="guide-tabs__more">
                      <Link href={localizePath(`/category/${tab.category}`, locale)}>
                        {ui.popularGuidesMore}
                      </Link>
                    </div>
                  ) : null}
                </>
              ),
            }))}
          />
        </div>
      </section>

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
