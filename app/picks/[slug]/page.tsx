import type { Metadata } from "next";
import { ArticleView } from "@/components/views/ArticleView";
import { siteConfig } from "@/content/site";
import { getAllArticles, getArticleBySlug, getArticleThumbnail } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const base = getArticleBySlug(slug);
  if (!base) {
    return {};
  }
  const article = localizeArticle(base, "ja");
  const thumbnail = getArticleThumbnail(article);
  const metadata = buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/picks/${article.slug}`,
    image: thumbnail.src,
    type: "article",
    publishedTime: article.publishedAt,
    locale: "ja",
  });

  return {
    ...metadata,
    title: article.seoTitle.includes(siteConfig.name)
      ? { absolute: article.seoTitle }
      : article.seoTitle,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  return <ArticleView slug={slug} locale="ja" />;
}
