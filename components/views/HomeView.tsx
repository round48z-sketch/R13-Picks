import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { GuideCard } from "@/components/GuideCard";
import { EditorsPicks } from "@/components/home/EditorsPicks";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { HomeHero } from "@/components/home/HomeHero";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PopularGuideTabs } from "@/components/PopularGuideTabs";
import { getCategory } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import { getSiteDescription } from "@/content/i18n/site";
import { getUi } from "@/content/i18n/ui";
import {
  getArticleCategory,
  getArticleThumbnail,
  getEditorsPickArticles,
  getFeaturedStoryArticles,
  getHeroCarouselArticles,
  getLatestArticles,
  getPopularGuideTabs,
  NEW_ARRIVALS_LIMIT,
} from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";
import { localizePath } from "@/lib/i18n/path";
import { buildGlobalSearchIndex } from "@/lib/search-index";

const POPULAR_GUIDES_PER_TAB = 4;

/**
 * Phase 1 home hero renewal: media hero is shown; carousel stays wired but hidden.
 * Set to `true` to restore the previous HeroCarousel block without deleting code.
 */
const SHOW_HERO_CAROUSEL = false;

const ROUNDUP_HERO_SLUGS = new Set([
  "beauty-appliances-5-picks",
  "desk-setup-5-picks",
  "wireless-earbuds-under-10000",
  "refurbished-laptops-5-picks",
]);

export function HomeView({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const featuredStories = getFeaturedStoryArticles().map((article) =>
    localizeArticle(article, locale),
  );
  const editorsPicks = getEditorsPickArticles().map((article) =>
    localizeArticle(article, locale),
  );
  const latest = getLatestArticles(NEW_ARRIVALS_LIMIT).map((article) =>
    localizeArticle(article, locale),
  );
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
      <HomeHero locale={locale} searchEntries={searchEntries} />

      {SHOW_HERO_CAROUSEL ? (
        <div className="container">
          <HeroCarousel slides={heroSlides} locale={locale} />
        </div>
      ) : null}

      <div className="container home-categories">
        <CategoryNav />
      </div>

      <FeaturedStories articles={featuredStories} locale={locale} />

      <EditorsPicks articles={editorsPicks} locale={locale} />

      <section className="section section--guides section--home-editorial" id="popular-guides">
        <div className="container">
          <div className="section-head section-head--guides section-head--editorial">
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

      <section className="section section--home-editorial" id="new-picks">
        <div className="container">
          <div className="section-head section-head--editorial section-head--with-action">
            <div className="section-head__copy">
              <p className="section-label">{ui.newPicksLabel}</p>
              <h2>{ui.newPicksTitle}</h2>
            </div>
            <Link
              href={localizePath("/picks", locale)}
              className="section-head__view-all"
            >
              {ui.viewAll}
            </Link>
          </div>
          <div className="card-grid card-grid--home">
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
