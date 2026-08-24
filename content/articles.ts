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
  note?: string;
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
    slug: "audio-technica-ath-sq1tw2nc",
    title: "audio-technica ATH-SQ1TW2NC｜コンパクトで映える、黒の完全ワイヤレスイヤホン",
    seoTitle: "audio-technica ATH-SQ1TW2NC｜コンパクトで映える黒イヤホン | R13 Picks",
    description:
      "audio-technica ATH-SQ1TW2NCをR13 Picksの視点で紹介。ANC、スクエア型デザイン、片耳約4.0g、ワイヤレス充電対応など、日常使いに取り入れやすい完全ワイヤレスイヤホンです。",
    category: "audio",
    productName: "audio-technica ATH-SQ1TW2NC",
    productType: "完全ワイヤレスイヤホン",
    publishedAt: "2026-08-24",
    image: {
      src: "/images/articles/audio-technica-ath-sq1tw2nc-pinterest.jpg",
      alt: "黒いaudio-technica ATH-SQ1TW2NCの完全ワイヤレスイヤホンと充電ケース",
      width: 1152,
      height: 1728,
    },
    excerpt: "スクエア型のコンパクトなデザインが特徴の、黒の完全ワイヤレスイヤホン。",
    intro:
      "audio-technica ATH-SQ1TW2NCは、スクエア型のコンパクトなデザインが特徴の完全ワイヤレスイヤホンです。ブラックは黒系のガジェットとも合わせやすく、アクティブノイズキャンセリング（ANC）やワイヤレス充電など、日常で使いやすい機能を備えています。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "アクティブノイズキャンセリング（ANC）を搭載",
      "スクエア型のコンパクトなデザイン",
      "片耳約4.0g",
      "ワイヤレス充電に対応",
      "ブラックを含む複数カラー展開",
    ],
    design:
      "ブラックのスクエア型デザインが中心の、コンパクトでガジェット感のある見た目です。丸みの強い形状より角が立ち、黒系の道具と並べやすい印象です。カラーはブラックを含む複数展開があります。",
    recommendedFor: [
      "黒系ガジェットで身の回りをまとめたい人",
      "コンパクトな完全ワイヤレスイヤホンを探している人",
      "ANC搭載モデルを選びたい人",
      "スクエア型デザインが好きな人",
      "ワイヤレス充電対応を重視する人",
    ],
    scenes: [
      "通勤や移動中",
      "カフェや外出先",
      "自宅で音楽や動画を楽しむとき",
      "日常の持ち歩き用",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "brillamico-lily-46mm-black-silver",
    title: "BRILLAMICO LILY 46MM｜黒×シルバーで映えるラグジュアリーウォッチ",
    seoTitle: "BRILLAMICO LILY 46MM｜黒×シルバーで映えるラグジュアリーウォッチ | R13 Picks",
    description:
      "BRILLAMICO LILY 46MM BLACK x SILVERをR13 Picksの視点で紹介。黒とシルバー、スワロフスキー、マザーオブパールを組み合わせた、存在感のある腕時計です。",
    category: "watch",
    productName: "BRILLAMICO LILY 46MM BLACK x SILVER ＜革ベルト＞",
    productType: "腕時計",
    publishedAt: "2026-08-24",
    image: {
      src: "/images/articles/brillamico-lily-black-silver-pinterest.jpg",
      alt: "黒とシルバーのBRILLAMICO LILY 46MMと革ベルト",
      width: 1152,
      height: 1728,
    },
    excerpt: "黒とシルバー、スワロフスキーを組み合わせた、存在感のある腕時計。",
    intro:
      "BRILLAMICO LILY 46MM BLACK x SILVER ＜革ベルト＞は、黒とシルバーを基調にした腕時計です。スワロフスキーとマザーオブパールを組み合わせた、装飾性の高い一本として紹介します。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "ケース径は約46.5mm、厚さは約11mm、重量は約95g",
      "ケース素材はSUS316Lステンレス",
      "スワロフスキーを使用した、装飾性の高いデザイン",
      "文字盤はマザーオブパール",
      "ベルトは革ベルト",
      "日本製クオーツを搭載",
      "3気圧防水",
      "カラーはBLACK x SILVER",
    ],
    design:
      "黒とシルバーの対比が中心の、存在感のあるデザインです。マザーオブパールの文字盤とスワロフスキーの装飾が加わり、ラグジュアリーな印象に寄っています。ケース径は約46.5mmと大きめなので、腕元で存在感を出しやすい見た目です。",
    recommendedFor: [
      "黒とシルバーで身の回りをまとめたい人",
      "装飾性の高い腕時計を探している人",
      "存在感のあるデザインを選びたい人",
    ],
    scenes: [
      "外出や改まった場で、装いを整えるとき",
      "黒を基調にした服装に、シルバーのアクセントを足したいとき",
      "日常のなかで、時計に存在感を持たせたいとき",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
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
];
