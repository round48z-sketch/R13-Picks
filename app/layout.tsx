import type { Metadata, Viewport } from "next";
import { GFS_Didot, Inter, Noto_Sans_JP, Zen_Kurenaido } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HtmlLang } from "@/components/HtmlLang";
import { getSiteUrl, siteConfig } from "@/content/site";
import { getSiteDescription } from "@/content/i18n/site";
import "./globals.css";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

/** Neo-grotesque face for UI chrome (nav, etc.). */
const display = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

/**
 * Wordmark face: GFS Didot (Greek Font Society) via Google Fonts / next/font.
 * License: SIL Open Font License 1.1 (self-hosted by Next.js at build time).
 */
const brand = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brand",
  display: "swap",
});

/** Soft handwritten Japanese face for hero accent copy (OFL via Google Fonts). */
const hand = Zen_Kurenaido({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name}｜${siteConfig.tagline}`,
    template: `%s｜${siteConfig.name}`,
  },
  description: getSiteDescription("ja"),
  applicationName: siteConfig.name,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${sans.variable} ${display.variable} ${brand.variable} ${hand.variable}`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2686187361737003"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <HtmlLang />
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-P1CXMVNL4C" />
    </html>
  );
}
