import type { Locale } from "@/content/i18n/config";
import type { CategorySlug } from "@/content/categories";

export type CategoryCopy = {
  localName: string;
  description: string;
  lead: string;
};

export const categoryCopy: Record<Locale, Record<CategorySlug, CategoryCopy>> = {
  ja: {
    audio: {
      localName: "オーディオ",
      description: "ワイヤレスイヤホンやヘッドホンなど、日常の音を整える道具を紹介しています。",
      lead: "日常の音を、静かに整える。",
    },
    gadget: {
      localName: "ガジェット",
      description: "暮らしを静かに助ける、小さなガジェットを紹介しています。",
      lead: "主張しすぎない、小さな道具。",
    },
    watch: {
      localName: "時計",
      description: "毎日の腕に馴染む、落ち着いた腕時計を紹介しています。",
      lead: "時間を知るための、一本。",
    },
    fashion: {
      localName: "ファッション",
      description: "財布、バッグ、小物など、日常に溶け込むファッションアイテムを紹介しています。",
      lead: "手元と装いを、静かに整える。",
    },
    desk: {
      localName: "デスク",
      description: "仕事机に残しておきたい、デスク周りの道具を紹介しています。",
      lead: "机の上を、必要最低限に。",
    },
    lifestyle: {
      localName: "ライフスタイル",
      description: "暮らしに馴染む雑貨と、毎日使いたくなる道具を紹介しています。",
      lead: "暮らしに馴染む、小さな選択。",
    },
  },
  en: {
    audio: {
      localName: "Audio",
      description: "Wireless earbuds, headphones, and other tools for everyday listening.",
      lead: "Quietly refine the sound of daily life.",
    },
    gadget: {
      localName: "Gadget",
      description: "Small gadgets that quietly support everyday living.",
      lead: "Understated tools with a clear purpose.",
    },
    watch: {
      localName: "Watch",
      description: "Calm watches designed to settle into everyday wear.",
      lead: "One watch for telling time, simply.",
    },
    fashion: {
      localName: "Fashion",
      description: "Wallets, bags, and accessories that blend into daily outfits.",
      lead: "Quietly refine what you wear and carry.",
    },
    desk: {
      localName: "Desk",
      description: "Desk tools worth keeping on a work surface.",
      lead: "Keep the desk to what you need.",
    },
    lifestyle: {
      localName: "Lifestyle",
      description: "Everyday goods and tools that fit naturally into daily life.",
      lead: "Small choices that settle into living.",
    },
  },
  ko: {
    audio: {
      localName: "오디오",
      description: "무선 이어폰과 헤드폰 등, 일상의 사운드를 정리하는 제품을 소개합니다.",
      lead: "일상의 사운드를 조용히 정리하다.",
    },
    gadget: {
      localName: "가제트",
      description: "생활을 조용히 도와주는 작은 가제트를 소개합니다.",
      lead: "과하지 않은, 작은 도구.",
    },
    watch: {
      localName: "시계",
      description: "매일 착용하기 편한, 차분한 손목시계를 소개합니다.",
      lead: "시간을 알기 위한 한 점.",
    },
    fashion: {
      localName: "패션",
      description: "지갑, 가방, 소품 등 일상에 자연스럽게 어울리는 패션 아이템을 소개합니다.",
      lead: "손끝과 스타일을 조용히 정리하다.",
    },
    desk: {
      localName: "데스크",
      description: "작업 책상에 남겨 두고 싶은 데스크 주변 도구를 소개합니다.",
      lead: "책 위를 꼭 필요한 것만으로.",
    },
    lifestyle: {
      localName: "라이프스타일",
      description: "생활에 자연스럽게 스며드는 잡화와 매일 쓰고 싶은 도구를 소개합니다.",
      lead: "생활에 스며드는 작은 선택.",
    },
  },
  zh: {
    audio: {
      localName: "音频",
      description: "介绍无线耳机、头戴耳机等，用于整理日常听感的产品。",
      lead: "安静地整理日常的声音。",
    },
    gadget: {
      localName: "数码配件",
      description: "介绍安静地帮助生活的小型数码配件。",
      lead: "不过分张扬的小工具。",
    },
    watch: {
      localName: "腕表",
      description: "介绍适合日常佩戴、风格沉稳的腕表。",
      lead: "用来看时间的一支表。",
    },
    fashion: {
      localName: "时尚",
      description: "介绍钱包、包袋、配饰等融入日常穿搭的时尚单品。",
      lead: "安静地整理手边与穿搭。",
    },
    desk: {
      localName: "桌面",
      description: "介绍值得留在工作桌面上的桌面周边工具。",
      lead: "让桌面只留下必要之物。",
    },
    lifestyle: {
      localName: "生活方式",
      description: "介绍融入生活的杂货，以及让人想每天使用的工具。",
      lead: "融入生活的小小选择。",
    },
  },
};

export function getCategoryCopy(locale: Locale, slug: CategorySlug): CategoryCopy {
  return categoryCopy[locale][slug];
}
