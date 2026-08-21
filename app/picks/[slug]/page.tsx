import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { AffiliateButton } from "@/components/AffiliateButton";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getSiteUrl, siteConfig } from "@/content/site";
import {
  formatDate,
  getAllArticles,
  getArticleBySlug,
  getArticleCategory,
  getRelatedArticles,
} from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {};
  }
  return buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/picks/${article.slug}`,
    image: article.image.src,
    type: "article",
    publishedTime: article.publishedAt,
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const category = getArticleCategory(article);
  const related = getRelatedArticles(article);
  const url = `${getSiteUrl()}/picks/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [`${getSiteUrl()}${article.image.src}`],
    datePublished: article.publishedAt,
    mainEntityOfPage: url,
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
          {category ? <Link href={`/category/${category.slug}`}>{category.name}</Link> : null}
          {" ／ "}
          {formatDate(article.publishedAt)}
        </p>
        <p className="product-name">{article.productName}</p>
        <h1>{article.title}</h1>
        <p className="pr-note">PR｜本ページはアフィリエイト広告を利用しています</p>
      </div>

      <div className="narrow article-body">
        <h2>商品の特徴</h2>
        <p>{article.intro}</p>

        <AdSlot />

        <h2>おすすめポイント</h2>
        <ul>
          {article.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <h2>こんな人におすすめ</h2>
        <ul>
          {article.recommendedFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="cta-wrap">
          <AffiliateButton slug={article.slug} label={article.ctaLabel} />
        </div>

        <AdSlot size="rectangle" />
      </div>

      <div className="narrow">
        <RelatedArticles articles={related} />
      </div>

      <div className="sticky-cta">
        <AffiliateButton slug={article.slug} label={article.ctaLabel} />
      </div>
    </article>
  );
}
