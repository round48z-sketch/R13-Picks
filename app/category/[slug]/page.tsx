import type { Metadata } from "next";
import { CategoryView } from "@/components/views/CategoryView";
import { categories, getCategory } from "@/content/categories";
import { getCategoryCopy } from "@/content/i18n/categories";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    return {};
  }
  const copy = getCategoryCopy("ja", category.slug);
  return buildMetadata({
    title: `${category.name}｜${copy.localName}`,
    description: copy.description,
    path: `/category/${category.slug}`,
    locale: "ja",
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  return <CategoryView slug={slug} locale="ja" />;
}
