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
  pointsTitle?: string;
  sections?: { title: string; body: string }[];
  design?: string;
  pairing?: string;
  recommendedTitle?: string;
  recommendedFor: string[];
  scenes?: string[];
  summary?: string;
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
    slug: "brillamico-grace-mia-black",
    title: "黒のスクエアで上品に。BRILLAMICO GRACE MIA BLACK",
    seoTitle: "BRILLAMICO GRACE MIA BLACK｜黒のスクエアフェイス腕時計 | R13 Picks",
    description:
      "BRILLAMICO GRACE MIA BLACKをR13 Picksの視点で紹介。ブラックのスクエアフェイスと、公式で案内されるカットガラス、キュービックジルコニアの文字盤を中心にまとめます。",
    category: "watch",
    productName: "BRILLAMICO GRACE MIA BLACK",
    productType: "腕時計",
    publishedAt: "2026-09-01",
    image: {
      src: "/images/articles/brillamico-grace-mia-black-pinterest.jpg",
      alt: "黒いスクエアフェイスのBRILLAMICO GRACE MIA BLACK",
      width: 1008,
      height: 1792,
    },
    excerpt: "ブラックのスクエアフェイスと、キュービックジルコニアの文字盤。",
    intro:
      "BRILLAMICO（ブリラミコ）の GRACE MIA BLACK は、公式サイトで販売されている腕時計です。公式では数量限定商品で、在庫がなくなり次第、販売終了と案内されています。ブラックを基調にしたスクエアフェイスで、公式ページでは「優雅に煌めくBRILLAMICOの新商品」として紹介されています。価格や在庫は変わることがあるため、最新の価格・在庫は公式販売ページで確認してください。",
    pointsTitle: "GRACE MIA BLACKとは",
    points: [
      "ブランドはBRILLAMICO（ブリラミコ）",
      "商品名は GRACE MIA BLACK",
      "BRILLAMICO公式サイトで販売",
      "公式では数量限定商品として案内",
      "在庫がなくなり次第、販売終了と案内されている",
      "ブラックを基調にしたスクエアフェイス",
      "文字盤はキュービックジルコニアで施されている（公式案内）",
    ],
    sections: [
      {
        title: "ブラックのスクエアフェイス",
        body: "ブラック系のスクエアフェイスで、丸型の時計とは異なる外観です。公式の本体サイズは3×2.3cmです。本体素材はステンレス（SUS316L）とキュービックジルコニアです。黒を基調にした装いに合わせやすく、上品さや高級感のある見た目を時計で出したい場合の候補です。",
      },
      {
        title: "カットガラスとキュービックジルコニアの文字盤",
        body: "公式では、「細かくカットが入ったガラスに光が差し込み、キュービックジルコニアで施された文字盤が上品に光り輝く」と案内されています。華やかさのある文字盤で、シンプルな無地の時計とは見た目が異なります。見え方の詳細は、公式の商品ページで確認してください。",
      },
      {
        title: "金属ベルトとの組み合わせ",
        body: "ベルト素材は、公式仕様ではステンレス（SUS316L）とキュービックジルコニアです。公式では金属ベルトとして案内されています。腕周りは14.5〜19.5cmです。重量は82gです。",
      },
      {
        title: "ファッションに取り入れるなら",
        body: "ブラックのスクエアフェイスなので、黒を基調にした装いのアクセントとして検討しやすいデザインです。公式では、MIA はイタリア語で「私の」を指すと案内されています。実用品としての時計だけでなく、上質さやファッション性を意識して選びたい場合の候補です。",
      },
      {
        title: "どんな人に向いているか",
        body: "ブラックのスクエアフェイスを、黒コーデや装いのアクセントにしたい人。キュービックジルコニアの文字盤など、華やかさのある見た目を選びたい人。数量限定として案内されているモデルを、公式情報を確認したうえで検討したい人。",
      },
    ],
    recommendedTitle: "購入前に確認しておきたいポイント",
    recommendedFor: [
      "本体サイズは3×2.3cm、重量は82g（公式仕様）",
      "腕周りは14.5〜19.5cm。公式では、通常発送時は腕周り14.5cmで送ると案内されている",
      "サイズ調整が必要な場合は、公式の案内に従い、購入時の備考欄へ腕周りサイズを入力する",
      "仕様は日本製クオーツ、3気圧防水（生活防水）",
      "数量限定で、在庫がなくなり次第販売終了と案内されている",
      "最新の価格・在庫は公式販売ページで確認してください",
    ],
    summary:
      "GRACE MIA BLACKは、ブラックのスクエアフェイスを中心にしたBRILLAMICOの腕時計です。公式では、カットが入ったガラスとキュービックジルコニアの文字盤が上品に光ると案内されています。数量限定の扱いもあるため、検討する場合は公式販売ページで最新情報を確認してください。",
    note: "最新の価格・在庫は公式販売ページで確認してください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "brillamico-lily-46mm-black-gold",
    title: "黒×ゴールドで魅せる。BRILLAMICO LILY 46MM BLACK x GOLD",
    seoTitle: "BRILLAMICO LILY 46MM BLACK x GOLD｜黒×ゴールドの腕時計 | R13 Picks",
    description:
      "BRILLAMICO LILY 46MM BLACK x GOLD ＜革ベルト＞をR13 Picksの視点で紹介。ブラック×ゴールド、革ベルト、文字盤が動くLILYシリーズの46MMモデルです。",
    category: "watch",
    productName: "BRILLAMICO LILY 46MM BLACK x GOLD ＜革ベルト＞",
    productType: "腕時計",
    publishedAt: "2026-09-01",
    image: {
      src: "/images/articles/brillamico-lily-46mm-black-gold-pinterest.jpg",
      alt: "黒とゴールドのBRILLAMICO LILY 46MMと革ベルト",
      width: 1008,
      height: 1792,
    },
    excerpt: "ブラック×ゴールドと革ベルトの、存在感のあるLILY 46MM。",
    intro:
      "BRILLAMICO（ブリラミコ）の LILY 46MM BLACK x GOLD ＜革ベルト＞は、公式サイトで販売されているLILYシリーズの腕時計です。サイズ表記は46MM、カラーはBLACK x GOLD、ベルトは革ベルト仕様です。LILYシリーズは、公式で文字盤が動くことを特徴として案内されています。ブラックとゴールドを組み合わせた外観で、ファッションのアクセントとして検討しやすいデザインです。最新の価格・在庫は公式販売ページで確認してください。",
    pointsTitle: "BRILLAMICO LILY 46MM BLACK x GOLDとは",
    points: [
      "ブランドはBRILLAMICO（ブリラミコ）",
      "シリーズはLILY",
      "商品名は LILY 46MM BLACK x GOLD ＜革ベルト＞",
      "サイズ表記は46MM（本体サイズは直径46.5mm／厚さ11mm）",
      "カラーはBLACK x GOLD",
      "革ベルト仕様",
      "LILYシリーズは文字盤が動くことを特徴としている",
      "BRILLAMICO公式サイトで販売",
    ],
    sections: [
      {
        title: "ブラック×ゴールドの存在感あるデザイン",
        body: "BLACK x GOLDのカラー構成で、ブラックとゴールドを組み合わせた外観です。本体素材はステンレス（SUS316L）とスワロフスキー、文字盤素材はマザーオブパール（MOP）です。公式では、スワロフスキーをあしらった直径46mmのフェイスとして案内されています。装飾性の高い見た目で、シンプルな時計とは異なる存在感のあるデザインです。",
      },
      {
        title: "LILYシリーズならではの文字盤",
        body: "公式のLILYシリーズ案内では、「文字盤がクルクルと動くのが特徴的」とされています。文字盤素材はマザーオブパール（MOP）で、スワロフスキーも使用されています。装飾性の高い文字盤であり、シンプルな時計とは見た目が異なります。見え方の詳細は、公式の商品ページで確認してください。",
      },
      {
        title: "革ベルトとの組み合わせ",
        body: "このモデルは革ベルト仕様です。公式の仕様では、ベルト素材は本皮（クロコ型押し）とスワロフスキーです。ラグ幅は20mm、腕周りは16.5〜21.5cm（ベルト着用時、穴に留めたサイズ）と案内されています。",
      },
      {
        title: "ファッションに取り入れるなら",
        body: "ブラックとゴールドを組み合わせた外観なので、黒を基調にした装いのアクセントとして検討しやすいデザインです。時間を知る実用品としてだけでなく、ファッションアイテムとして時計を選びたい場合の候補です。ケース径は直径46.5mmと案内されているため、大きさも含めて公式情報を確認するとよいでしょう。",
      },
      {
        title: "どんな人に向いているか",
        body: "ブラック×ゴールドの外観を、黒コーデや装いのアクセントにしたい人。シンプルな時計ではなく、文字盤が動くLILYシリーズの見た目を選びたい人。革ベルト仕様で、ファッションアイテムとして時計を検討したい人。",
      },
    ],
    recommendedTitle: "購入前に確認しておきたいポイント",
    recommendedFor: [
      "本体サイズは直径46.5mm、厚さ11mm、重量は95g（公式仕様）",
      "腕周りは16.5〜21.5cm（ベルト着用時、穴に留めたサイズ）",
      "仕様は日本製クオーツ、3気圧防水（生活防水）",
      "文字盤が動くLILYシリーズのため、シンプルな時計とは見た目が異なる",
      "最新の価格・在庫は公式販売ページで確認してください",
    ],
    summary:
      "LILY 46MM BLACK x GOLD ＜革ベルト＞は、ブラックとゴールドを組み合わせ、革ベルトを採用したBRILLAMICOのLILYシリーズです。公式では文字盤が動くことを特徴として案内されており、装飾性の高い文字盤と存在感のある外観が中心の一本です。ファッションのアクセントとして時計を選びたい場合の候補です。",
    note: "最新の価格・在庫は公式販売ページで確認してください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "tamas-pr-apc265c",
    title: "ケーブル内蔵で持ち歩きやすい。tama's PR-APC265C 65W充電器",
    seoTitle: "tama's PR-APC265C｜ケーブル内蔵の65W充電器 | R13 Picks",
    description:
      "多摩電子工業 tama's PR-APC265CをR13 Picksの視点で紹介。巻取り式USB-Cケーブル内蔵、USB Power Delivery最大65W、GaN採用の充電器です。",
    category: "gadget",
    productName: "tama's PR-APC265C",
    productType: "コンセント充電器",
    publishedAt: "2026-08-30",
    image: {
      src: "/images/articles/tamas-pr-apc265c-pinterest.jpg",
      alt: "黒いtama's PR-APC265CのUSB充電器",
      width: 1152,
      height: 1728,
    },
    excerpt: "巻取り式USB-Cケーブルを内蔵した、黒の65W充電器。",
    intro:
      "多摩電子工業の tama's PR-APC265C は、巻取り式USB-Cケーブルを内蔵したUSB Power Delivery対応の充電器です。最大65W、GaN（窒化ガリウム）採用、USB-Cポート、90°回転式ACプラグを備えています。メーカーではノートPC、スマートフォン、タブレット、ゲーム機などの充電用途として案内しています。黒基調のシンプルな見た目で、充電器とUSB-Cケーブルを別々に持ち歩く構成を減らせる製品です。最新情報は販売ページで確認してください。",
    pointsTitle: "PR-APC265Cの特徴",
    points: [
      "USB Power Delivery対応、最大65W",
      "巻取り式USB-Cケーブル内蔵",
      "GaN（窒化ガリウム）採用",
      "USB-Cポート 1ポート搭載",
      "ブラックカラーあり",
      "過電流・過電圧保護機能",
      "90°回転式ACプラグ",
      "AC100V〜240V対応",
    ],
    sections: [
      {
        title: "巻取り式USB-Cケーブルについて",
        body: "本体に巻取り式USB-Cケーブルが内蔵されています。充電器とUSB-Cケーブルを別々に持ち歩く構成を減らせる仕様です。加えてUSB-Cポートを1ポート搭載しています。",
      },
      {
        title: "65W PD対応について",
        body: "USB Power Deliveryに対応し、出力は最大65Wです。メーカーではノートPC、スマートフォン、タブレット、ゲーム機などの充電用途として案内しています。対応機器や充電の速さは、接続する機器側の仕様によって変わります。",
      },
      {
        title: "GaN採用と本体設計",
        body: "GaN（窒化ガリウム）を採用しています。カラーはブラックとホワイトがあり、今回取り上げるのは黒モデルです。装飾の少ないシンプルな見た目で、R13 Picksの黒を基調とした道具選びにも取り入れやすいデザインです。",
      },
      {
        title: "90°回転式プラグと持ち運び",
        body: "ACプラグは90°回転式です。電源はAC100V〜240Vに対応しています。海外で使う場合は、国や地域によって変換プラグが必要なことがあります。",
      },
    ],
    recommendedTitle: "どんな人に向いているか",
    recommendedFor: [
      "充電器とUSB-Cケーブルを別々に持ち歩く構成を減らしたい人",
      "最大65WのUSB Power Delivery対応充電器を探している人",
      "黒くシンプルな充電器を選びたい人",
      "メーカーが案内するノートPCやスマートフォンなどの充電に使いたい人",
    ],
    summary:
      "tama's PR-APC265Cは、巻取り式USB-Cケーブル内蔵、USB Power Delivery最大65W、GaN採用、90°回転式ACプラグを備えた充電器です。黒基調のシンプルなデザインで、持ち歩き用の充電環境をまとめたい場合の候補です。",
    note: "最新情報は販売ページで確認してください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "gtplayer-ch488",
    title: "GTPLAYER CH488｜黒メッシュで整えるデスクチェア",
    seoTitle: "GTPLAYER CH488｜黒メッシュのデスクチェア | R13 Picks",
    description:
      "GTPLAYER 人間工学シリーズ CH488をR13 Picksの視点で紹介。ブラックのメッシュデザインやヘッドレスト、アームレストなど、確認できる特徴を中心にまとめます。",
    category: "desk",
    productName: "GTPLAYER 人間工学シリーズ CH488",
    productType: "オフィスチェア",
    publishedAt: "2026-08-28",
    image: {
      src: "/images/articles/gtplayer-ch488-office-chair.jpg",
      alt: "黒いGTPLAYER CH488のオフィスチェア",
      width: 3584,
      height: 4800,
    },
    excerpt: "ブラックのメッシュでまとめた、デスク環境向けのオフィスチェア。",
    intro:
      "GTPLAYER 人間工学シリーズ CH488は、ブラックを基調としたメッシュタイプのオフィスチェアです。公式ではオフィスチェアとして紹介されており、ヘッドレスト、背もたれ、アームレスト、キャスター付きの構造が確認できます。メーカーでは人間工学シリーズとして案内されています。価格や在庫は変わることがあるため、最新の価格・在庫・キャンペーン情報は公式商品ページをご確認ください。",
    pointsTitle: "CH488の特徴",
    points: [
      "ブラックカラー",
      "メッシュタイプの背もたれ",
      "ヘッドレスト付き",
      "アームレスト付き",
      "キャスター付き",
      "公式ではオフィスチェアとして紹介",
      "公式サイトでは1年保証を案内",
    ],
    design:
      "ブラックを中心としたメッシュ素材の外観に、シルバー系パーツがアクセントになったデザインです。ゲーミングチェア特有の派手さを抑えた外観で、黒系のデスク環境に合わせやすく、PCやガジェットを黒で統一している空間にも取り入れやすい印象です。デスク周りを落ち着いたトーンでまとめたい場合の候補です。",
    pairing:
      "黒いデスクやモニター、キーボードなど、色数を抑えた作業スペースと並べやすいチェアです。主張の強いカラーリングではないので、仕事用・PC作業用のデスク環境にも馴染ませやすい見た目です。",
    recommendedFor: [
      "黒いデスクチェアを探している人",
      "メッシュタイプの椅子を検討している人",
      "ヘッドレスト付きモデルを探している人",
      "PCデスクや在宅ワーク環境を黒でまとめたい人",
      "派手すぎないオフィスチェアを選びたい人",
    ],
    note: "最新の価格・在庫・キャンペーン情報は公式商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "kinujo-silk-premium-dryer-pro",
    title: "KINUJO Silk Premium Dryer PRO｜黒で整える、2.7㎥/分の大風量ドライヤー",
    seoTitle: "KINUJO Silk Premium Dryer PRO｜黒で整える大風量ドライヤー | R13 Picks",
    description:
      "KINUJO Silk Premium Dryer PROをR13 Picksの視点で紹介。約2.7㎥/分の大風量、温度・風量3段階、180度回転ハンドル、専用スタンドなどを備えたブラックのサロン向けドライヤーです。",
    category: "lifestyle",
    productName: "KINUJO Silk Premium Dryer PRO",
    productType: "ドライヤー",
    publishedAt: "2026-08-27",
    image: {
      src: "/images/articles/kinujo-silk-premium-dryer-pro.jpg",
      alt: "黒いKINUJO Silk Premium Dryer PROのドライヤー",
      width: 2048,
      height: 2048,
    },
    excerpt: "ブラックを基調にした、約2.7㎥/分の大風量ドライヤー。",
    intro:
      "KINUJO Silk Premium Dryer PRO（型番：KP601）は、ブラックを基調としたサロン専売のドライヤーです。風量は約2.7㎥/分（メーカー自社基準での測定値）で、温度と風量をそれぞれ3段階で調整できます。本体のみの質量は約392g、180度回転ハンドル、約3mのコード、専用スタンドと3種類のノズルが付属します。国内専用です。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "風量は約2.7㎥/分（メーカー自社基準での測定値）",
      "BLDCモーターを搭載",
      "温度調節は3段階",
      "風量調節は3段階",
      "冷風モードを搭載",
      "本体質量は約392g（本体のみ）",
      "本体サイズは約197（W）×62（D）×175（H）mm（本体のみ）",
      "180度回転ハンドル",
      "コード長は約3m",
      "吸込口を取り外して手入れ可能",
      "温度に応じて4色表示する液晶ライティング",
      "ブローノズル、エアリーノズル、ボリュームノズルの3種類が付属",
      "専用スタンド付属",
      "電源はAC100V 50/60Hz、消費電力1250W、国内専用",
    ],
    design:
      "ブラックを基調とした本体で、横方向に伸びた特徴的なシルエットです。操作ボタンや吸込口を含む外観は装飾を抑えており、黒系の家電やインテリアに合わせやすい印象です。R13 Picksの黒を基調とした道具選びにも取り入れやすい見た目です。",
    recommendedFor: [
      "黒い美容家電を選びたい人",
      "大風量のドライヤーを探している人",
      "温度や風量を複数段階で調整したい人",
      "サロン向け仕様のドライヤーが気になる人",
      "専用スタンドや複数ノズル付きモデルを探している人",
      "デザインも含めて日用品を選びたい人",
    ],
    scenes: [
      "毎日のヘアドライ",
      "自宅でのヘアセット",
      "温度や風量を使い分けたいとき",
      "ブラック系の洗面・美容家電をまとめたいとき",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "rorry-charmgo-t1",
    title: "RORRY CharmGo T1｜10000mAh・30W対応、持ち歩きやすい黒モバイルバッテリー",
    seoTitle: "RORRY CharmGo T1｜10000mAh・30W対応の黒モバイルバッテリー | R13 Picks",
    description:
      "RORRY CharmGo T1をR13 Picksの視点で紹介。10000mAh、最大30W急速充電、ケーブル収納、最大3台同時充電などに対応したキーホルダー型モバイルバッテリーです。",
    category: "gadget",
    productName: "RORRY CharmGo T1 10000mAh キーホルダー型モバイルバッテリー（30W対応）",
    productType: "モバイルバッテリー",
    publishedAt: "2026-08-27",
    image: {
      src: "/images/articles/rorry-charmgo-t1-pinterest.jpg",
      alt: "黒いRORRY CharmGo T1のキーホルダー型モバイルバッテリー",
      width: 1008,
      height: 1792,
    },
    excerpt: "10000mAh・最大30W対応の、持ち歩きやすい黒のキーホルダー型モバイルバッテリー。",
    intro:
      "RORRY CharmGo T1は、10000mAhの容量と最大30Wの急速充電に対応したキーホルダー型モバイルバッテリーです。USB-Cケーブルを本体にまとめて持ち歩ける設計で、ブラックカラーのシンプルな見た目です。メーカー案内では、10000mAh容量でスマートフォンを最大約2回充電可能とされています。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "容量 10000mAh",
      "最大30Wの急速充電に対応",
      "USB-Cケーブルの入出力に対応",
      "キーホルダー付き",
      "ケーブルを本体にまとめて収納できる設計",
      "最大3台の同時充電に対応",
      "パススルー機能に対応",
      "多種安全保護機能を備えている",
      "メーカー案内では、10000mAh容量でスマートフォンを最大約2回充電可能",
      "ブラックカラーあり",
    ],
    design:
      "ブラックカラーの本体に、角を丸めたシンプルな形状です。キーホルダーリングと、ケーブルを本体にまとめられる外観が中心です。黒系のガジェットと合わせやすく、持ち物の色を黒でまとめたいときにも取り入れやすい見た目です。",
    recommendedFor: [
      "黒系ガジェットで持ち物をまとめたい人",
      "10000mAhクラスのモバイルバッテリーを探している人",
      "最大30W対応モデルを探している人",
      "ケーブルを別に持ち歩く手間を減らしたい人",
      "外出時に複数デバイスを充電したい人",
      "キーホルダー付きのモバイルバッテリーが気になる人",
    ],
    scenes: [
      "通勤や通学",
      "外出先",
      "旅行",
      "カフェやコワーキングスペース",
      "スマートフォンなどの充電が必要な場面",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "life-pocket-slim-wallet",
    title: "LIFE POCKET Slim Wallet｜薄さ7mm、黒で整えるミニマルウォレット",
    seoTitle: "LIFE POCKET Slim Wallet｜薄さ7mmのミニマルウォレット | R13 Picks",
    description:
      "LIFE POCKET Slim WalletをR13 Picksの視点で紹介。厚さ約7mm、約57g、サフィアーノレザーを採用した、黒でまとめやすい薄型ウォレットです。",
    category: "fashion",
    productName: "LIFE POCKET Slim Wallet",
    productType: "財布",
    publishedAt: "2026-08-27",
    image: {
      src: "/images/articles/life-pocket-slim-wallet-pinterest.jpg",
      alt: "黒いLIFE POCKET Slim Walletの薄型ウォレット",
      width: 1152,
      height: 1728,
    },
    excerpt: "厚さ約7mmの、黒でまとめやすい薄型ウォレット。",
    intro:
      "LIFE POCKET Slim Walletは、厚さ約7mmの薄型ウォレットです。サイズは約H9.3 × W10.8 × D0.7cm、重量は約57gで、黒系の小物と合わせやすい見た目です。素材はサフィアーノレザー（牛革）で、YKKファスナーとMAMORIO CARD対応を備えています。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "厚さ約7mmの薄型設計",
      "サイズは約H9.3 × W10.8 × D0.7cm",
      "重量 約57g",
      "素材はサフィアーノレザー（牛革）",
      "YKKファスナーを採用",
      "MAMORIO CARD対応",
      "ブラック系カラーあり",
    ],
    design:
      "ブラックの薄型ウォレットとして、余計な装飾を抑えたミニマルな見た目です。コンパクトなサイズなので、黒系の小物と並べやすい印象です。",
    recommendedFor: [
      "黒系の小物で統一したい人",
      "厚みを抑えた財布を探している人",
      "コンパクトな財布を持ち歩きたい人",
      "レザー素材のミニマルな財布が好みの人",
      "MAMORIO CARD対応の財布を探している人",
    ],
    scenes: [
      "普段使い",
      "小さめのバッグで出かけるとき",
      "荷物をコンパクトにまとめたいとき",
      "旅行や外出時のサブウォレット",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "sony-ult-wear",
    title: "SONY ULT WEAR｜黒で魅せる、ノイズキャンセリング対応ワイヤレスヘッドホン",
    seoTitle: "SONY ULT WEAR｜黒で魅せるワイヤレスヘッドホン | R13 Picks",
    description:
      "SONY ULT WEARをR13 Picksの視点で紹介。ノイズキャンセリング、LDAC、マルチポイント、最大約50時間再生など、日常から長時間の移動まで使いやすいワイヤレスヘッドホンです。",
    category: "audio",
    productName: "SONY ULT WEAR",
    productType: "ワイヤレスノイズキャンセリングヘッドホン",
    publishedAt: "2026-08-24",
    image: {
      src: "/images/articles/sony-ult-wear-pinterest.jpg",
      alt: "黒いSONY ULT WEARのワイヤレスヘッドホン",
      width: 1152,
      height: 1728,
    },
    excerpt: "黒を基調にした、ノイズキャンセリング対応のワイヤレスヘッドホン。",
    intro:
      "SONY ULT WEARは、黒を基調にしたワイヤレスノイズキャンセリングヘッドホンです。丸みのあるオーバーイヤー型で、黒系のガジェットとも合わせやすい見た目です。Bluetooth 5.2、SBC / AAC / LDAC、マルチポイントなど、日常から長時間の移動まで使いやすい機能を備えています。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "ノイズキャンセリング対応",
      "Bluetooth 5.2",
      "SBC / AAC / LDACに対応",
      "マルチポイント対応",
      "ノイズキャンセリングON時、最大約30時間再生",
      "ノイズキャンセリングOFF時、最大約50時間再生",
      "本体重量 約255g",
      "キャリングケース付属",
      "ブラックを含むカラー展開",
    ],
    design:
      "ブラックを中心にした、丸みのあるオーバーイヤー型のデザインです。装飾を抑えた見た目なので、黒系のガジェットと並べやすい印象です。カラーはブラックを含む展開があります。",
    recommendedFor: [
      "黒系ガジェットで身の回りをまとめたい人",
      "ノイズキャンセリング対応ヘッドホンを探している人",
      "LDAC対応を重視する人",
      "マルチポイントを使いたい人",
      "長時間再生できるワイヤレスヘッドホンを探している人",
    ],
    scenes: [
      "通勤や移動中",
      "カフェや外出先",
      "自宅で音楽や動画を楽しむとき",
      "PCやスマホを切り替えて使うとき",
      "旅行や長時間の移動",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
  {
    slug: "final-ze3000-sv",
    title: "final ZE3000 SV｜黒で整える、機能性も備えた完全ワイヤレスイヤホン",
    seoTitle: "final ZE3000 SV｜黒で整える、機能性も備えた完全ワイヤレスイヤホン | R13 Picks",
    description:
      "final ZE3000 SVをR13 Picksの視点で紹介。Bluetooth 5.3、SBC / AAC / LDAC、コンフォートANC、最大2台のマルチポイント、IPX4など、日常使いに取り入れやすい完全ワイヤレスイヤホンです。",
    category: "audio",
    productName: "final ZE3000 SV",
    productType: "完全ワイヤレスイヤホン",
    publishedAt: "2026-08-24",
    image: {
      src: "/images/articles/final-ze3000-sv-pinterest.jpg",
      alt: "黒いfinal ZE3000 SVの完全ワイヤレスイヤホンと充電ケース",
      width: 1152,
      height: 1728,
    },
    excerpt: "黒を基調にした、機能性を備えた完全ワイヤレスイヤホン。",
    intro:
      "final ZE3000 SVは、黒を基調にした完全ワイヤレスイヤホンです。Bluetooth 5.3、SBC / AAC / LDAC、コンフォートANC、最大2台のマルチポイント、最大60msのゲーミングモード、IPX4など、日常で使いやすい機能を備えています。final CONNECTにも対応しています。価格や在庫は変わることがあるため、最新の価格・在庫状況は商品ページをご確認ください。",
    points: [
      "Bluetooth 5.3",
      "SBC / AAC / LDACに対応",
      "コンフォートANCを搭載",
      "最大2台のマルチポイントに対応",
      "最大60msのゲーミングモード",
      "IPX4",
      "ANC ON時、本体最大約7時間",
      "ケース込み最大約28時間",
      "10分充電で約1時間使用可能",
      "final CONNECTに対応",
    ],
    design:
      "ブラックの筐体が中心の、コンパクトな完全ワイヤレスイヤホンです。装飾を抑えた見た目なので、黒系の道具と並べやすい印象です。",
    recommendedFor: [
      "黒系ガジェットで身の回りをまとめたい人",
      "機能を確認して完全ワイヤレスイヤホンを選びたい人",
      "コンフォートANC搭載モデルを探している人",
      "LDACやマルチポイント対応を重視する人",
      "final CONNECT対応を選びたい人",
    ],
    scenes: [
      "通勤や移動中",
      "カフェや外出先",
      "自宅で音楽や動画を楽しむとき",
      "ゲームをプレイするとき",
    ],
    note: "最新の価格・在庫状況は商品ページをご確認ください。",
    ctaLabel: "商品を見る",
    featured: true,
  },
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
