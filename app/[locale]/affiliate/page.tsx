import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AffiliateView } from "@/components/views/StaticViews";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { affiliatePages } from "@/content/i18n/pages";
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
  const page = affiliatePages[locale];
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: "/affiliate",
    locale,
  });
}

export default async function LocaleAffiliatePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <AffiliateView locale={locale as PrefixedLocale} />;
}
