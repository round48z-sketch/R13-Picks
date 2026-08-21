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
  recommendedFor: string[];
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
    slug: "focus-over-ear-headphones",
    title: "集中するための、静かな時間。オーバーイヤーヘッドホン",
    seoTitle: "集中するためのオーバーイヤーヘッドホン",
    description:
      "在宅作業や読書の時間に合わせたい、落ち着いたオーバーイヤーヘッドホン。装着感と遮音性のバランスを重視して選びました。",
    category: "audio",
    productName: "Over-ear Headphones",
    productType: "ヘッドホン",
    publishedAt: "2026-08-12",
    image: {
      src: "/images/articles/headphones-dark.jpg",
      alt: "マットブラックのオーバーイヤーヘッドホン",
      width: 1200,
      height: 1500,
    },
    excerpt: "部屋に戻ったあと、世界を少しだけ小さくするためのヘッドホン。",
    intro:
      "家で仕事をする時間、本を読む時間、何もしない時間。ヘッドホンは、その境界をつくる道具でもあります。このオーバーイヤーは、耳を包み込むクッションと、低音を強調しすぎないバランスのよさが特徴。一日中つけていても疲れにくく、音楽を聴くためだけではなく、集中のための静かな箱として使えます。",
    points: [
      "耳まわりをやさしく覆い、長時間の作業でも疲れにくい",
      "低音が主張しすぎず、声や楽器が聞き取りやすい",
      "マットブラックで、デスクに置いても主張しすぎない",
      "ケーブルでもワイヤレスでも使える柔軟さがある",
    ],
    recommendedFor: [
      "在宅ワークや勉強の集中力を上げたい人",
      "イヤホンより、頭全体で音を感じたい人",
      "部屋に出しっぱなしにしても気にならないデザインを求める人",
    ],
    ctaLabel: "商品を見る",
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
