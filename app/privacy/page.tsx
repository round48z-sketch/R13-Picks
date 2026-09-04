import type { Metadata } from "next";
import { PrivacyView } from "@/components/views/StaticViews";
import { privacyPages } from "@/content/i18n/pages";
import { buildMetadata } from "@/lib/metadata";

const page = privacyPages.ja;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/privacy",
  locale: "ja",
});

export default function PrivacyPage() {
  return <PrivacyView locale="ja" />;
}
