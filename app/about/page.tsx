import type { Metadata } from "next";
import { AboutView } from "@/components/views/StaticViews";
import { aboutPages } from "@/content/i18n/pages";
import { buildMetadata } from "@/lib/metadata";

const page = aboutPages.ja;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/about",
  locale: "ja",
});

export default function AboutPage() {
  return <AboutView locale="ja" />;
}
