export const categorySlugs = [
  "audio",
  "gadget",
  "watch",
  "fashion",
  "desk",
  "lifestyle",
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export type Category = {
  slug: CategorySlug;
  name: string;
  ja: string;
  description: string;
  lead: string;
};

/**
 * カテゴリ一覧
 *
 * 追加するときは、この配列にオブジェクトを足すだけです。
 * slug が URL（/category/[slug]）と記事の category フィールドになります。
 */
export const categories: Category[] = [
  {
    slug: "audio",
    name: "Audio",
    ja: "オーディオ",
    description: "ワイヤレスイヤホンやヘッドホンなど、日常の音を整える道具を紹介しています。",
    lead: "日常の音を、静かに整える。",
  },
  {
    slug: "gadget",
    name: "Gadget",
    ja: "ガジェット",
    description: "暮らしを静かに助ける、小さなガジェットを紹介しています。",
    lead: "主張しすぎない、小さな道具。",
  },
  {
    slug: "watch",
    name: "Watch",
    ja: "時計",
    description: "毎日の腕に馴染む、落ち着いた腕時計を紹介しています。",
    lead: "時間を知るための、一本。",
  },
  {
    slug: "fashion",
    name: "Fashion",
    ja: "ファッション",
    description: "財布、バッグ、小物など、日常に溶け込むファッションアイテムを紹介しています。",
    lead: "手元と装いを、静かに整える。",
  },
  {
    slug: "desk",
    name: "Desk",
    ja: "デスク",
    description: "仕事机に残しておきたい、デスク周りの道具を紹介しています。",
    lead: "机の上を、必要最低限に。",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    ja: "ライフスタイル",
    description: "暮らしに馴染む雑貨と、毎日使いたくなる道具を紹介しています。",
    lead: "暮らしに馴染む、小さな選択。",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
