import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/content/site";
import { localeOgLocale, type Locale } from "@/content/i18n/config";
import { getAlternateLanguagePaths, localizePath } from "@/lib/i18n/path";
import { getSiteDescription } from "@/content/i18n/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  locale?: Locale;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
  type = "website",
  publishedTime,
  locale = "ja",
}: BuildMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const localizedPath = localizePath(path, locale);
  const url = `${siteUrl}${localizedPath === "/" ? "/" : localizedPath}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const languages = getAlternateLanguagePaths(path);
  const absoluteLanguages = Object.fromEntries(
    Object.entries(languages).map(([key, value]) => [
      key,
      `${siteUrl}${value === "/" ? "/" : value}`,
    ]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: absoluteLanguages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: localeOgLocale[locale],
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

export function buildHomeMetadata(locale: Locale): Metadata {
  const description = getSiteDescription(locale);
  const homeTitle = `${siteConfig.name}｜${siteConfig.tagline}`;
  return {
    ...buildMetadata({
      title: homeTitle,
      description,
      path: "/",
      locale,
    }),
    title: {
      absolute: homeTitle,
    },
  };
}
