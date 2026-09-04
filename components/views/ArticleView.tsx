import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { AffiliateButton } from "@/components/AffiliateButton";
import { RelatedArticles } from "@/components/RelatedArticles";
import type { Locale } from "@/content/i18n/config";
import { getSiteUrl, siteConfig } from "@/content/site";
import { getUi } from "@/content/i18n/ui";
import {
  getArticleBySlug,
  getArticleCategory,
  getRelatedArticles,
} from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";
import { localizePath } from "@/lib/i18n/path";

export function ArticleView({ slug, locale }: { slug: string; locale: Locale }) {
  const base = getArticleBySlug(slug);
  if (!base) {
    notFound();
  }

  const article = localizeArticle(base, locale);
  const ui = getUi(locale);
  const category = getArticleCategory(article);
  const related = getRelatedArticles(article).map((item) => localizeArticle(item, locale));
  const url = `${getSiteUrl()}${localizePath(`/picks/${article.slug}`, locale)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [`${getSiteUrl()}${article.image.src}`],
    datePublished: article.publishedAt,
    mainEntityOfPage: url,
    inLanguage: locale === "zh" ? "zh-CN" : locale,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <article className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="article-hero">
        <Image
          src={article.image.src}
          alt={article.image.alt}
          width={article.image.width}
          height={article.image.height}
          priority
          sizes="(max-width: 720px) 100vw, 680px"
        />
      </div>

      <div className="narrow article-head">
        <p className="eyebrow">
          {category ? (
            <Link href={localizePath(`/category/${category.slug}`, locale)}>{category.name}</Link>
          ) : null}
        </p>
        <h1>{article.title}</h1>
        <p className="pr-note">{ui.prNote}</p>
      </div>

      <div className="narrow article-body">
        <p className="article-intro">{article.intro}</p>

        <AdSlot />

        <h2>{article.pointsTitle ?? ui.featuresFallback}</h2>
        <ul>
          {article.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        {article.design ? (
          <>
            <h2>{ui.designTitle}</h2>
            <p>{article.design}</p>
          </>
        ) : null}

        {article.sections?.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}

        {article.pairing ? (
          <>
            <h2>{ui.pairingTitle}</h2>
            <p>{article.pairing}</p>
          </>
        ) : null}

        <h2>{article.recommendedTitle ?? ui.recommendedFallback}</h2>
        <ul>
          {article.recommendedFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {article.scenes ? (
          <>
            <h2>{ui.scenesTitle}</h2>
            <ul>
              {article.scenes.map((scene) => (
                <li key={scene}>{scene}</li>
              ))}
            </ul>
          </>
        ) : null}

        {article.summary ? (
          <>
            <h2>{ui.summaryTitle}</h2>
            <p>{article.summary}</p>
          </>
        ) : null}

        {article.note ? <p>{article.note}</p> : null}

        <div className="cta-wrap">
          <AffiliateButton slug={article.slug} label={article.ctaLabel} />
        </div>

        <AdSlot size="rectangle" />
      </div>

      <div className="narrow">
        <RelatedArticles articles={related} locale={locale} />
      </div>

      <div className="sticky-cta">
        <AffiliateButton slug={article.slug} label={article.ctaLabel} />
      </div>
    </article>
  );
}
