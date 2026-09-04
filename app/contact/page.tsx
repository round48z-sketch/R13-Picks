import type { Metadata } from "next";
import { ContactView } from "@/components/views/StaticViews";
import { contactPages } from "@/content/i18n/pages";
import { buildMetadata } from "@/lib/metadata";

const page = contactPages.ja;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/contact",
  locale: "ja",
});

export default function ContactPage() {
  return <ContactView locale="ja" />;
}
