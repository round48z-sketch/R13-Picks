import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyView } from "@/components/views/StaticViews";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { privacyPages } from "@/content/i18n/pages";
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
  const page = privacyPages[locale];
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: "/privacy",
    locale,
  });
}

export default async function LocalePrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <PrivacyView locale={locale as PrefixedLocale} />;
}
