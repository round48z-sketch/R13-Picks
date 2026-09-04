import type { Locale } from "@/content/i18n/config";

export type SiteCopy = {
  description: string;
};

export const siteCopy: Record<Locale, SiteCopy> = {
  ja: {
    description:
      "R13 Picksは、暮らしに馴染むモノを紹介するメディアです。オーディオ、ガジェット、時計、ファッション、デスク、ライフスタイルから、毎日に取り入れたいものだけを選びます。",
  },
  en: {
    description:
      "R13 Picks is a media site that introduces things that settle into everyday life. From audio, gadgets, watches, fashion, desk, and lifestyle, we choose only what you may want to keep using.",
  },
  ko: {
    description:
      "R13 Picks는 일상에 자연스럽게 어울리는 제품을 소개하는 미디어입니다. 오디오, 가제트, 시계, 패션, 데스크, 라이프스타일 가운데 매일 쓰고 싶은 것만 고릅니다.",
  },
  zh: {
    description:
      "R13 Picks 是介绍融入日常生活之物的媒体。我们从音频、数码配件、腕表、时尚、桌面与生活方式中，只挑选值得日常使用的产品。",
  },
};

export function getSiteDescription(locale: Locale): string {
  return siteCopy[locale].description;
}
