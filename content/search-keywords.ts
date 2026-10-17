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

/**
 * Subcategory synonyms (DESK / GADGET).
 * Avoid guessing specs (wired/wireless/color) here — those come from article text.
 */
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
  ],
  mouse: [
    "マウス",
    "PCマウス",
    "静音",
    "トラックボール",
    "ゲーミング",
    "仕事用",
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

/** productType substring → extra keywords (no speculative wired/wireless/color). */
export const productTypeSearchKeywords: { match: RegExp; keywords: string[] }[] = [
  {
    match: /ワイヤレスイヤホン|完全ワイヤレス|TWS/i,
    keywords: [
      "イヤホン",
      "ワイヤレスイヤホン",
      "Bluetoothイヤホン",
      "ブルートゥース",
      "完全ワイヤレス",
      "TWS",
      "音楽",
      "通勤",
    ],
  },
  {
    match: /ヘッドホン|ヘッドフォン/i,
    keywords: ["ヘッドホン", "ヘッドフォン", "イヤホン", "音楽"],
  },
  {
    match: /マウス/i,
    keywords: ["マウス", "PCマウス", "仕事用"],
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

/**
 * Synonym groups for query matching (OR within a group) and haystack expansion
 * (only when at least one member already appears in article text).
 */
export const searchSynonymGroups: string[][] = [
  ["黒", "ブラック", "くろ", "black", "くろいろ"],
  ["白", "ホワイト", "しろ", "white", "しろいろ"],
  ["ワイヤレス", "無線", "wireless", "cordless"],
  ["有線", "ケーブル接続", "wired", "コード付き"],
  ["イヤホン", "いゃほん", "earphone", "earphones", "earbuds", "ear buds"],
  ["ヘッドホン", "ヘッドフォン", "headphone", "headphones"],
  ["マウス", "mouse"],
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

/** @deprecated Use searchSynonymGroups — kept as alias for clarity in older notes. */
export const searchVariantGroups = searchSynonymGroups;

export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[‐‑‒–—―]/g, "-")
    .replace(/[_\u3000]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isCjkChar(ch: string): boolean {
  return /[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff]/.test(ch);
}

/**
 * Strip common negation phrases before testing connectivity / color tokens,
 * so "ワイヤレスではありません" does not count as a wireless product.
 */
function prepareHaystackForTokenMatch(haystack: string): string {
  return normalizeSearchText(haystack)
    .replace(
      /ワイヤレス(?:モデル)?(?:で(?:は)?)?(?:ありません|ない|ありませんでした)|ワイヤレス非対応|bluetooth\s*非対応|無線(?:で(?:は)?)?(?:ありません|ない)/g,
      " ",
    )
    .replace(
      /有線(?:モデル)?(?:で(?:は)?)?(?:ありません|ない)|有線非対応/g,
      " ",
    )
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Content-grounded token test. Avoids false hits like 白 inside 昼白色.
 */
export function containsSearchToken(haystack: string, token: string): boolean {
  const t = normalizeSearchText(token);
  if (!t) return false;

  const h = prepareHaystackForTokenMatch(haystack);
  if (!h) return false;

  if (t.length >= 2) {
    return h.includes(t);
  }

  // Single-character CJK (e.g. 黒 / 白): skip known false-positive compounds
  if (t === "白") {
    let idx = 0;
    while (idx < h.length) {
      const found = h.indexOf("白", idx);
      if (found === -1) return false;
      const prev = found > 0 ? h[found - 1] : "";
      if (prev !== "昼" && prev !== "温") return true;
      idx = found + 1;
    }
    return false;
  }

  return h.includes(t);
}

/** True when a search query / term is long enough to run. */
export function isSearchTermUsable(term: string): boolean {
  const t = normalizeSearchText(term);
  if (!t) return false;
  if (isCjkChar(t[0] ?? "")) return t.length >= 1;
  return t.length >= 2;
}

/**
 * Expand a user term into OR-synonyms.
 * Does not invent attributes — only maps known equivalent spellings.
 */
export function getSynonymsForTerm(term: string): string[] {
  const t = normalizeSearchText(term);
  if (!t) return [];

  for (const group of searchSynonymGroups) {
    const normalizedGroup = group.map((token) => normalizeSearchText(token)).filter(Boolean);
    const hit = normalizedGroup.some((g) => {
      if (g === t) return true;
      if (g.length >= 2 && (t.includes(g) || g.includes(t))) return true;
      // Allow single-kanji color / short CJK tokens (e.g. 黒, 白)
      if (g.length === 1 && isCjkChar(g) && t.includes(g)) return true;
      return false;
    });
    if (hit) {
      return Array.from(new Set([t, ...normalizedGroup]));
    }
  }

  return [t];
}

/**
 * If article text already contains a synonym, append the rest of that group
 * so queries using alternate spellings can match without fabricating facts.
 */
export function expandSearchVariants(text: string): string {
  let next = normalizeSearchText(text);
  for (const group of searchSynonymGroups) {
    const normalizedGroup = group.map((token) => normalizeSearchText(token)).filter(Boolean);
    if (normalizedGroup.some((token) => containsSearchToken(next, token))) {
      next = `${next} ${normalizedGroup.join(" ")}`;
    }
  }
  return next.replace(/\s+/g, " ").trim();
}

/** Split a user query into AND-terms (spaces / full-width spaces). */
export function parseSearchTerms(query: string): string[] {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];

  return normalized
    .split(" ")
    .map((part) => part.trim())
    .filter((part) => isSearchTermUsable(part));
}
