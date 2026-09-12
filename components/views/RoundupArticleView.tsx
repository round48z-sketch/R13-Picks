import Image from "next/image";
import Link from "next/link";
import { A8ProductLink } from "@/components/A8ProductLink";
import { AdSlot } from "@/components/AdSlot";
import { RelatedArticles } from "@/components/RelatedArticles";
import type { Article } from "@/content/articles";
import { getA8ProductLinkHtml } from "@/content/a8-product-links";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { getSiteUrl, siteConfig } from "@/content/site";
import type { Category } from "@/content/categories";
import { localizePath } from "@/lib/i18n/path";

type RoundupArticleViewProps = {
  article: Article;
  locale: Locale;
  category: Category | undefined;
  related: Article[];
};

export function RoundupArticleView({
  article,
  locale,
  category,
  related,
}: RoundupArticleViewProps) {
  const ui = getUi(locale);
  const picks = article.picks ?? [];
  const hero = article.heroImage ?? article.image;
  const url = `${getSiteUrl()}${localizePath(`/picks/${article.slug}`, locale)}`;
  const jsonLdImage = `${getSiteUrl()}${hero.src}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [jsonLdImage],
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

  const table = article.comparisonTable;
  const headers = table?.headers ?? [];

  return (
    <article className="article-page article-page--roundup roundup-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="roundup-hero">
        {picks.length > 0 ? (
          <div className="roundup-hero__strip-wrap" aria-label="掲載モデル比較ビジュアル">
            <div className="roundup-hero__strip">
              {picks.map((pick, index) => (
                <Link
                  key={pick.slug}
                  href={localizePath(`/picks/${pick.slug}`, locale)}
                  className="roundup-hero__strip-cell"
                  title={pick.name}
                >
                  <div className="roundup-hero__strip-img-box">
                    <Image
                      src={pick.image.src}
                      alt={pick.name}
                      width={pick.image.width || 400}
                      height={pick.image.height || 400}
                      priority={index < 7}
                      sizes="(max-width: 768px) 110px, 150px"
                      className="roundup-hero__strip-img"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="roundup-hero__banner">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              sizes="100vw"
            />
          </div>
        )}
        <div className="narrow roundup-hero__copy">
          <p className="eyebrow">
            {category ? (
              <Link href={localizePath(`/category/${category.slug}`, locale)}>{category.name}</Link>
            ) : null}
          </p>
          <p className="roundup-hero__type">{article.productType}</p>
          <h1>{article.title}</h1>
          <p className="pr-note">{ui.prNote}</p>
        </div>
      </div>

      <div className="narrow article-body roundup-body">
        <p className="article-intro">{article.intro}</p>

        {picks.length > 0 ? (
          <section className="roundup-overview" aria-labelledby="roundup-overview-heading">
            <h2 id="roundup-overview-heading">{article.overviewTitle ?? "Overview"}</h2>
            <div className="roundup-overview__grid">
              {picks.map((pick) => (
                <Link
                  key={pick.slug}
                  href={localizePath(`/picks/${pick.slug}`, locale)}
                  className="roundup-overview-card"
                >
                  <div className="roundup-overview-card__media">
                    <Image
                      src={pick.image.src}
                      alt={pick.image.alt}
                      fill
                      sizes="(max-width: 720px) 45vw, 180px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="roundup-overview-card__body">
                    <p className="roundup-overview-card__name">{pick.name}</p>
                    <p className="roundup-overview-card__label">{pick.shortLabel}</p>
                    <p className="roundup-overview-card__price">{pick.priceGuide}</p>
                    <span className="roundup-overview-card__cta">{pick.linkLabel ?? ui.readMore}</span>
                  </div>
                </Link>
              ))}
            </div>
            {article.note ? <p className="roundup-price-note">{article.note}</p> : null}
          </section>
        ) : null}

        <AdSlot />

        {article.points.length > 0 ? (
          <section>
            <h2>{article.pointsTitle ?? ui.featuresFallback}</h2>
            <ul className="roundup-points">
              {article.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {table ? (
          <section className="roundup-compare" aria-labelledby="roundup-compare-heading">
            {table.title ? <h2 id="roundup-compare-heading">{table.title}</h2> : null}

            <div className="roundup-compare__desktop">
              <div className="article-table-scroll">
                <table className="article-table roundup-table">
                  <thead>
                    <tr>
                      {headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, index) => (
                          <td key={`${row[0]}-${index}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="roundup-compare__mobile">
              {table.rows.map((row) => (
                <article key={row.join("|")} className="roundup-compare-card">
                  <h3>{row[0]}</h3>
                  <dl>
                    {row.slice(1).map((cell, index) => (
                      <div key={`${row[0]}-${headers[index + 1]}`}>
                        <dt>{headers[index + 1]}</dt>
                        <dd>{cell}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {picks.length > 0 ? (
          <section className="roundup-picks" aria-labelledby="roundup-picks-heading">
            <h2 id="roundup-picks-heading">{article.picksTitle ?? ui.readMore}</h2>
            {picks.map((pick) => {
              const a8Html = getA8ProductLinkHtml(pick.slug);
              return (
                <article key={pick.slug} className="roundup-pick-card">
                  <div
                    className={
                      a8Html
                        ? "roundup-pick-card__media roundup-pick-card__media--a8"
                        : "roundup-pick-card__media"
                    }
                  >
                    {a8Html ? (
                      <A8ProductLink html={a8Html} />
                    ) : (
                      <Image
                        src={pick.image.src}
                        alt={pick.image.alt}
                        fill
                        sizes="(max-width: 720px) 100vw, 280px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className="roundup-pick-card__content">
                    <h3>
                      <Link href={localizePath(`/picks/${pick.slug}`, locale)}>{pick.name}</Link>
                    </h3>
                    <p className="roundup-pick-card__tagline">{pick.tagline}</p>
                    <p className="roundup-pick-card__price">{pick.priceGuide}</p>
                    {pick.tags.length > 0 ? (
                      <ul className="roundup-tags">
                        {pick.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="roundup-pick-card__label">{article.pickFeaturesLabel ?? "Features"}</p>
                    <ul>
                      {pick.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <p className="roundup-pick-card__label">
                      {article.pickRecommendedLabel ?? "Good for"}
                    </p>
                    <ul>
                      {pick.recommendedFor.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link
                      href={localizePath(`/picks/${pick.slug}`, locale)}
                      className="cta-button cta-button--inline"
                    >
                      {pick.linkLabel ?? ui.readMore}
                    </Link>
                  </div>
                </article>
              );
            })}
          </section>
        ) : null}

        {article.useCases && article.useCases.length > 0 ? (
          <section className="roundup-use-cases" aria-labelledby="roundup-use-cases-heading">
            <h2 id="roundup-use-cases-heading">{article.useCasesTitle ?? "Use cases"}</h2>
            <div className="roundup-use-cases__grid">
              {article.useCases.map((useCase) => (
                <Link
                  key={`${useCase.title}-${useCase.productSlug}`}
                  href={localizePath(`/picks/${useCase.productSlug}`, locale)}
                  className="roundup-use-case"
                >
                  <p className="roundup-use-case__title">{useCase.title}</p>
                  <p className="roundup-use-case__product">{useCase.productName}</p>
                  {useCase.body ? <p className="roundup-use-case__body">{useCase.body}</p> : null}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {article.recommendedFor.length > 0 ? (
          <section>
            <h2>{article.recommendedTitle ?? ui.recommendedFallback}</h2>
            <ul>
              {article.recommendedFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {article.summary ? (
          <section>
            <h2>{ui.summaryTitle}</h2>
            <p>{article.summary}</p>
          </section>
        ) : null}

        <AdSlot size="rectangle" />
      </div>

      <div className="narrow">
        <RelatedArticles articles={related} locale={locale} />
      </div>
    </article>
  );
}
