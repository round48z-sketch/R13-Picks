import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeView } from "@/components/views/HomeView";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { buildHomeMetadata } from "@/lib/metadata";

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
  return buildHomeMetadata(locale);
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <HomeView locale={locale as PrefixedLocale} />;
}
