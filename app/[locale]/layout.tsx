import { notFound } from "next/navigation";
import { isPrefixedLocale, prefixedLocales } from "@/content/i18n/config";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) {
    notFound();
  }
  return children;
}
