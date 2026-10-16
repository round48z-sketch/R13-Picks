import type { CategorySlug } from "./categories";
import type { SubCategoryId } from "./subcategories";

/** Category-level Japanese / EN search synonyms. */
export const categorySearchKeywords: Record<CategorySlug, string[]> = {
  audio: [
    "イヤホン",
    "ヘッドホン",
    "ヘッドフォン",
    "ワイヤレスイヤホン",
    "Bluetoothイヤホン",
    "ブルートゥース",
    "bluetooth",
    "完全ワイヤレス",
    "TWS",
    "オーディオ",
    "音楽",
    "通勤",
    "ノイズキャンセリング",
    "ANC",
  ],
  gadget: [
    "ガジェット",
    "周辺機器",
    "PC周辺",
    "テレワーク",
    "在宅ワーク",
    "デスクワーク",
  ],
  watch: [
    "腕時計",
    "時計",
    "ウォッチ",
    "watch",
    "メンズ腕時計",
    "レディース腕時計",
    "電波ソーラー",
    "アウトドアウォッチ",
    "黒い腕時計",
    "黒時計",
  ],
  fashion: ["ファッション", "財布", "バッグ", "小物", "アクセサリー", "ネックレス"],
  desk: [
    "デスク",
    "デスク周り",
    "机",
    "テレワーク",
    "在宅ワーク",
    "デスクワーク",
  ],
  lifestyle: ["ライフスタイル", "暮らし", "美容家電", "ドライヤー", "ヘアアイロン", "美顔器"],
};

/** Subcategory synonyms (DESK / GADGET). */
export const subCategorySearchKeywords: Partial<Record<SubCategoryId, string[]>> = {
  "desk-light": [
    "デスクライト",
    "卓上ライト",
    "ライト",
    "照明",
    "クランプライト",
    "LEDライト",
    "読書灯",
  ],
  "laptop-stand": [
    "ノートPCスタンド",
    "ノートパソコンスタンド",
    "パソコンスタンド",
    "PCスタンド",
    "ラップトップスタンド",
    "タブレットスタンド",
  ],
  chair: ["チェア", "椅子", "オフィスチェア", "デスクチェア", "ワークチェア", "ゲーミングチェア"],
  desk: ["デスク", "机", "オフィスデスク", "PCデスク", "ワークデスク", "昇降デスク"],
  storage: ["収納", "整理", "オーガナイザー", "ケーブル整理"],
  charger: [
    "充電器",
    "USB-C",
    "USB C",
    "Type-C",
    "Type C",
    "タイプC",
    "PD",
    "GaN",
    "急速充電",
    "65W",
    "スマホ充電器",
    "MacBook充電器",
    "AC充電器",
    "ワイヤレス充電器",
  ],
  mouse: [
    "マウス",
    "PCマウス",
    "有線",
    "ワイヤレス",
    "無線",
    "静音",
    "トラックボール",
    "ゲーミング",
    "仕事用",
    "Bluetoothマウス",
  ],
  "pc-monitor": [
    "ノートPC",
    "ノートパソコン",
    "PC",
    "モニター",
    "ディスプレイ",
    "モバイルモニター",
    "Chromebook",
    "再生ノート",
    "中古ノート",
  ],
  "power-bank": ["モバイルバッテリー", "バッテリー", "充電器", "外出先充電", "10000mAh"],
  "usb-hub-accessories": [
    "USBハブ",
    "ハブ",
    "ドッキングステーション",
    "ケーブル",
    "充電ケーブル",
    "変換アダプタ",
    "周辺機器",
  ],
};

/** productType substring → extra keywords */
export const productTypeSearchKeywords: { match: RegExp; keywords: string[] }[] = [
  {
    match: /ワイヤレスイヤホン|完全ワイヤレス|TWS/i,
    keywords: ["イヤホン", "ワイヤレスイヤホン", "Bluetoothイヤホン", "ブルートゥース", "完全ワイヤレス", "TWS", "音楽", "通勤"],
  },
  {
    match: /ヘッドホン|ヘッドフォン/i,
    keywords: ["ヘッドホン", "ヘッドフォン", "イヤホン", "音楽"],
  },
  {
    match: /マウス/i,
    keywords: ["マウス", "PCマウス", "有線", "ワイヤレス", "無線", "仕事用"],
  },
  {
    match: /静音/i,
    keywords: ["静音", "静か"],
  },
  {
    match: /トラックボール/i,
    keywords: ["トラックボール", "マウス"],
  },
  {
    match: /充電器|USB急速|AC充電器|ワイヤレス充電器/i,
    keywords: ["充電器", "USB-C", "Type-C", "タイプC", "PD", "GaN", "急速充電"],
  },
  {
    match: /モバイルバッテリー/i,
    keywords: ["モバイルバッテリー", "バッテリー", "外出先"],
  },
  {
    match: /USBハブ|ハブ/i,
    keywords: ["USBハブ", "ハブ", "周辺機器"],
  },
  {
    match: /充電ケーブル|ケーブル/i,
    keywords: ["ケーブル", "充電ケーブル", "USB-C", "Type-C"],
  },
  {
    match: /ノート|Chromebook|パソコン/i,
    keywords: ["ノートPC", "ノートパソコン", "PC"],
  },
  {
    match: /モニター|ディスプレイ/i,
    keywords: ["モニター", "ディスプレイ", "PC"],
  },
  {
    match: /デスクライト|卓上ライト|クランプライト|デスクランプ/i,
    keywords: ["デスクライト", "卓上ライト", "ライト", "照明"],
  },
  {
    match: /PCスタンド|ノートPCスタンド/i,
    keywords: ["ノートPCスタンド", "パソコンスタンド", "PCスタンド"],
  },
  {
    match: /チェア|椅子/i,
    keywords: ["チェア", "椅子", "オフィスチェア"],
  },
  {
    match: /オフィスデスク|デスク/i,
    keywords: ["デスク", "机", "オフィスデスク"],
  },
  {
    match: /腕時計|ウォッチ/i,
    keywords: ["腕時計", "時計", "ウォッチ", "watch"],
  },
  {
    match: /電波ソーラー/i,
    keywords: ["電波ソーラー", "ソーラー", "腕時計"],
  },
  {
    match: /ドライヤー|ヘアアイロン|美顔器|美容/i,
    keywords: ["美容家電", "ドライヤー", "ヘアアイロン", "美顔器"],
  },
];

/** Extra variants injected into both query and haystack normalization. */
export const searchVariantGroups: string[][] = [
  ["usb-c", "usb c", "usbc", "type-c", "type c", "typec", "タイプc", "タイプ‐c", "タイプーc"],
  ["bluetooth", "ブルートゥース", "ぶるーとぅーす"],
  ["macbook", "mac book", "マックブック"],
  ["gan", "窒化ガリウム"],
  ["tws", "完全ワイヤレス", "完全無線"],
  ["pd", "power delivery", "パワーデリバリー"],
  ["anc", "ノイズキャンセリング", "ノイキャン"],
  ["65w", "65ｗ", "65ワット"],
  ["100w", "100ｗ"],
  ["20w", "20ｗ"],
];

export function expandSearchVariants(text: string): string {
  let next = text;
  for (const group of searchVariantGroups) {
    if (group.some((token) => next.includes(token))) {
      next = `${next} ${group.join(" ")}`;
    }
  }
  return next;
}

export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[‐‑‒–—―]/g, "-")
    .replace(/[_\u3000]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
