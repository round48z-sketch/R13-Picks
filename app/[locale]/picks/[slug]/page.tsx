import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/views/ArticleView";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { siteConfig } from "@/content/site";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const articles = getAllArticles();
  return prefixedLocales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) {
    return {};
  }
  const base = getArticleBySlug(slug);
  if (!base) {
    return {};
  }
  const article = localizeArticle(base, locale);
  const metadata = buildMetadata({
    title: article.seoTitle,
    description: article.description,
    path: `/picks/${article.slug}`,
    image: article.image.src,
    type: "article",
    publishedTime: article.publishedAt,
    locale,
  });

  return {
    ...metadata,
    title: article.seoTitle.includes(siteConfig.name)
      ? { absolute: article.seoTitle }
      : article.seoTitle,
  };
}

export default async function LocaleArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <ArticleView slug={slug} locale={locale as PrefixedLocale} />;
}
