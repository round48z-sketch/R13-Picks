import type { Metadata } from "next";
import { AffiliateView } from "@/components/views/StaticViews";
import { affiliatePages } from "@/content/i18n/pages";
import { buildMetadata } from "@/lib/metadata";

const page = affiliatePages.ja;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/affiliate",
  locale: "ja",
});

export default function AffiliatePage() {
  return <AffiliateView locale="ja" />;
}
