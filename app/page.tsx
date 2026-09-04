import type { Metadata } from "next";
import { HomeView } from "@/components/views/HomeView";
import { buildHomeMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildHomeMetadata("ja");

export default function HomePage() {
  return <HomeView locale="ja" />;
}
