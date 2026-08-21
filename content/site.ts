export const siteConfig = {
  name: "R13 Picks",
  logo: "R13 PICKS",
  tagline: "Selected things for everyday life.",
  description:
    "R13 Picksは、暮らしに馴染むモノを紹介するメディアです。オーディオ、ガジェット、時計、ファッション、デスク、ライフスタイルから、毎日に取り入れたいものだけを選びます。",
  email: "contact@r13picks.com",
  locale: "ja_JP",
  defaultOgImage: "/images/articles/earbuds-matte.jpg",
};

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
