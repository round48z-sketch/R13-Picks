import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/content/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
  type = "website",
  publishedTime,
}: BuildMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      publishedTime,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 1500,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "pinterest:title": title,
      "pinterest:description": description,
    },
  };
}
