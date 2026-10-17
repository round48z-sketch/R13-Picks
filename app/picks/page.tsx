import type { Metadata } from "next";
import { AllArticlesView } from "@/components/views/AllArticlesView";
import { getUi } from "@/content/i18n/ui";
import { buildMetadata } from "@/lib/metadata";

const locale = "ja" as const;

export function generateMetadata(): Metadata {
  const ui = getUi(locale);
  return buildMetadata({
    title: ui.allArticlesTitle,
    description: ui.allArticlesDescription,
    path: "/picks",
    locale,
  });
}

export default function AllArticlesPage() {
  return <AllArticlesView locale={locale} />;
}
