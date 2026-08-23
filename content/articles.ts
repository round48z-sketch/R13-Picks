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
    slug: "denon-ah-c830ncw",
    title: "DENON AH-C830NCW｜黒でまとまる、毎日使いやすいワイヤレスイヤホン",
    seoTitle: "DENON AH-C830NCW｜黒でまとまる、毎日使いやすいワイヤレスイヤホン | R13 Picks",
    description:
      "DENON AH-C830NCWを、黒でまとめやすい完全ワイヤレスイヤホンとして紹介。ハイブリッドANC、外音取り込み、IPX4など、日常使いしやすい機能を備えた一台です。",
    category: "audio",
    productName: "DENON AH-C830NCW",
    productType: "完全ワイヤレスイヤホン",
    publishedAt: "2026-08-23",
    image: {
      src: "/images/articles/denon-ah-c830ncw-pinterest.jpg",
      alt: "黒いDENON AH-C830NCWの完全ワイヤレスイヤホンと充電ケース",
      width: 1152,
      height: 1728,
    },
    excerpt: "黒でまとめやすい、日常使い向けの完全ワイヤレスイヤホン。",
    intro:
      "DENON AH-C830NCWは、黒を基調にした完全ワイヤレスイヤホンです。派手さより、毎日の移動や室内で使いやすいバランスを意識して紹介します。ハイブリッドANC、外音取り込み、IPX4など、日常で役立つ機能が揃った一台です。",
    points: [
      "ハイブリッドANC（アクティブノイズキャンセリング）を搭載し、移動中や室内で気になる周囲の音を抑えやすい",
      "外音取り込み機能（Ambient Monitor）に対応し、必要なときは周囲の音も把握しやすい",
      "Bluetooth 5.0に対応",
      "AAC / SBCに対応",
      "IPX4対応で、日常使いしやすい",
      "連続再生時間は最大約6時間、ケース込み最大約24時間。ANCオン時は約4.8時間、ケース込み約19時間",
    ],
    design:
      "ブラックとホワイトの展開があり、今回は黒を中心に紹介します。ケースと本体はコンパクトで、持ち歩きやすい印象です。装飾を抑えた見た目なので、黒系の道具と並べやすい一台です。",
    recommendedFor: [
      "黒系のガジェットで身の回りをまとめたい人",
      "通勤・移動中に使いやすい完全ワイヤレスイヤホンを探している人",
      "ANCや外音取り込みなど、日常向けの機能を重視したい人",
      "持ち歩きしやすいイヤホンを選びたい人",
    ],
    scenes: [
      "通勤や移動のあいだ",
      "カフェや外出先で音楽を聴くとき",
      "自宅で動画や音楽を楽しむとき",
      "軽い運動や日常使い",
    ],
    ctaLabel: "商品を見る",
    featured: true,
  },
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
