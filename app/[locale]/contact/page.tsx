import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactView } from "@/components/views/StaticViews";
import { isPrefixedLocale, prefixedLocales, type PrefixedLocale } from "@/content/i18n/config";
import { contactPages } from "@/content/i18n/pages";
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
  const page = contactPages[locale];
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: "/contact",
    locale,
  });
}

export default async function LocaleContactPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return <ContactView locale={locale as PrefixedLocale} />;
}
