import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryView } from "@/components/views/CategoryView";
import { categories, getCategory } from "@/content/categories";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { getCategoryCopy } from "@/content/i18n/categories";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return prefixedLocales.flatMap((locale) =>
    categories.map((category) => ({ locale, slug: category.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) {
    return {};
  }
  const category = getCategory(slug);
  if (!category) {
    return {};
  }
  const copy = getCategoryCopy(locale, category.slug);
  return buildMetadata({
    title: `${category.name}｜${copy.localName}`,
    description: copy.description,
    path: `/category/${category.slug}`,
    locale,
  });
}

export default async function LocaleCategoryPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <CategoryView slug={slug} locale={locale as PrefixedLocale} />;
}
