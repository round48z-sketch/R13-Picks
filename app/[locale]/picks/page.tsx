import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AllArticlesView } from "@/components/views/AllArticlesView";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    return {};
  }
  const ui = getUi(locale);
  return buildMetadata({
    title: ui.allArticlesTitle,
    description: ui.allArticlesDescription,
    path: "/picks",
    locale,
  });
}

export default async function LocaleAllArticlesPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <AllArticlesView locale={locale as PrefixedLocale} />;
}
