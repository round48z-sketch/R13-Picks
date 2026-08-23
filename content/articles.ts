import type { CategorySlug } from "./categories";

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: CategorySlug;
  productName: string;
  productType: string;
  publishedAt: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  excerpt: string;
  intro: string;
  points: string[];
  design?: string;
  recommendedFor: string[];
  scenes?: string[];
  ctaLabel: string;
  featured?: boolean;
};

/**
 * 記事一覧
 *
 * 追加手順:
 * 1. この配列の先頭に新しいオブジェクトを追加する（新しい記事ほど上）
 * 2. public/images/articles/ に縦長の商品画像を置く（目安 1200x1500）
 * 3. content/affiliate-links.ts に同じ slug で URL を追加する
 *
 * URL は /picks/[slug] になります。
 */
export const articles: Article[] = [
  {
    slug: "anker-soundcore-space-2",
    title: "Anker Soundcore Space 2｜黒で整える、毎日使いやすいワイヤレスヘッドホン",
    seoTitle: "Anker Soundcore Space 2｜毎日に馴染むワイヤレスヘッドホン | R13 Picks",
    description:
      "Anker Soundcore Space 2をR13 Picksの視点で紹介。黒を基調としたミニマルなデザインと、毎日のリスニングに取り入れやすいワイヤレスヘッドホンです。",
    category: "audio",
    productName: "Anker Soundcore Space 2",
    productType: "ヘッドホン",
    publishedAt: "2026-08-23",
    image: {
      src: "/images/articles/anker-space-2-pinterest.jpg",
      alt: "黒背景に置かれたマットブラックのワイヤレスヘッドホン",
      width: 1152,
      height: 1728,
    },
    excerpt: "黒を基調にした、毎日のリスニングに取り入れやすいワイヤレスヘッドホン。",
    intro:
      "Anker Soundcore Space 2は、黒を基調としたワイヤレスヘッドホンです。派手さより、机の上や移動のあいだに馴染みやすい形を意識しています。音を聴く時間を、静かに整えるための一本として紹介します。",
    points: [
      "マットな黒を基調にしており、周囲に馴染みやすい",
      "耳を覆うオーバーイヤー型のワイヤレスヘッドホン",
      "アクティブノイズキャンセリング（ANC）を搭載し、移動中や室内で気になる周囲の騒音を抑えやすい設計です。",
      "デスクに置いても、主張しすぎないサイズ感",
    ],
    design:
      "筐体は装飾を抑えた黒が中心です。光沢を前面に出すというより、マットで落ち着いた印象に寄っています。R13 Picksが扱う道具と同じく、色数を増やさず、黒とグレーの並びのなかに置きやすいデザインです。",
    recommendedFor: [
      "黒やグレーで身の回りをまとめたい人",
      "イヤホンより、ヘッドホンで聴きたい人",
      "通勤やデスクワークで、周囲の音を少し遠ざけたい人",
    ],
    scenes: [
      "在宅での作業中、集中したい時間",
      "通勤や移動のあいだ、自分の音に切り替えたいとき",
      "夜、部屋で音楽やコンテンツを聴くとき",
    ],
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "quiet-commute-wireless-earbuds",
    title: "通勤が静かに変わる。毎日使いたくなるワイヤレスイヤホン",
    seoTitle: "通勤が静かに変わるワイヤレスイヤホン",
    description:
      "ノイズキャンセリング性能と装着感のバランスがよい、日常使いのワイヤレスイヤホンを紹介。通勤・移動中に集中したい人向けの一択です。",
    category: "audio",
    productName: "Wireless Earbuds",
    productType: "ワイヤレスイヤホン",
    publishedAt: "2026-08-18",
    image: {
      src: "/images/articles/earbuds-matte.jpg",
      alt: "マットブラックのワイヤレスイヤホンと充電ケース",
      width: 1200,
      height: 1500,
    },
    excerpt: "移動中の騒音をほどよく遠ざけて、自分の時間を取り戻すための一本。",
    intro:
      "満員電車でも、作業中の部屋でも、音だけは自分のペースでいたい。このワイヤレスイヤホンは、主張しすぎないマットな見た目と、長時間つけても気になりにくい装着感が魅力です。音質を盛りすぎず、声と楽器の輪郭が自然に残るタイプなので、毎日の通勤やデスク作業用として選びやすい一本です。",
    points: [
      "周囲の音をやわらかく遮り、移動中でも集中しやすい",
      "マットな質感で、派手さのない見た目",
      "操作がシンプルで、使い始めの設定に迷いにくい",
      "充電ケース込みでもかさばらず、毎日持ち歩きやすい",
    ],
    recommendedFor: [
      "通勤・通学の騒音を少し遠ざけたい人",
      "大きなヘッドホンは外では使いにくい人",
      "黒やグレーでまとめたい人",
    ],
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "everyday-minimal-watch",
    title: "主張しすぎない、日常の腕時計",
    seoTitle: "主張しすぎない日常の腕時計",
    description:
      "スーツにも私服にも合わせやすい、文字盤の静かな腕時計。毎日の身だしなみを整えるための一本として紹介しています。",
    category: "watch",
    productName: "Everyday Watch",
    productType: "腕時計",
    publishedAt: "2026-08-05",
    image: {
      src: "/images/articles/watch-dark.jpg",
      alt: "暗い背景に置かれた腕時計",
      width: 1200,
      height: 1500,
    },
    excerpt: "時間を知るためだけに、腕に残しておく時計。",
    intro:
      "スマートフォンがあれば時刻はわかります。それでも腕時計を選ぶ理由は、時間を確認する動作そのものが、一日のリズムを整えてくれるからです。この一本は、太いインデックスも派手な色もありません。落ち着いた文字盤だけで、シャツの袖からも、ニットの袖口からも自然に顔を出します。",
    points: [
      "文字盤が静かで、服装を選ばず合わせやすい",
      "ケースサイズが大きすぎず、日常使いにちょうどよい",
      "ベルトの質感がよく、付け替えなくても長く使える",
      "時計としての存在感はあるが、装飾が多すぎない",
    ],
    recommendedFor: [
      "スマートウォッチではなく、針の時計を探している人",
      "仕事にも休日にも使える一本がほしい人",
      "アクセサリーを増やさず、身だしなみだけ整えたい人",
    ],
    ctaLabel: "商品を見る",
    featured: true,
  },
];
