import type { CategorySlug } from "./categories";
import type { Locale } from "./i18n/config";

/** DESK subcategory ids (stored on articles as `subCategory`). */
export type DeskSubCategory =
  | "desk-light"
  | "laptop-stand"
  | "chair"
  | "desk"
  | "storage"
  | "other";

/** GADGET subcategory ids (stored on articles as `subCategory`). */
export type GadgetSubCategory =
  | "charger"
  | "mouse"
  | "pc-monitor"
  | "power-bank"
  | "usb-hub-accessories"
  | "other";

export type SubCategoryId = DeskSubCategory | GadgetSubCategory;

export type SubCategoryDef = {
  id: SubCategoryId;
  labels: Record<Locale, string>;
};

const deskSubCategories: SubCategoryDef[] = [
  {
    id: "desk-light",
    labels: {
      ja: "デスクライト",
      en: "Desk Lights",
      ko: "데스크 라이트",
      zh: "台灯",
    },
  },
  {
    id: "laptop-stand",
    labels: {
      ja: "ノートPCスタンド",
      en: "Laptop Stands",
      ko: "노트북 스탠드",
      zh: "笔记本支架",
    },
  },
  {
    id: "chair",
    labels: {
      ja: "チェア",
      en: "Chairs",
      ko: "의자",
      zh: "椅子",
    },
  },
  {
    id: "desk",
    labels: {
      ja: "デスク",
      en: "Desks",
      ko: "책상",
      zh: "桌子",
    },
  },
  {
    id: "storage",
    labels: {
      ja: "収納・整理",
      en: "Storage & Organization",
      ko: "수납·정리",
      zh: "收纳整理",
    },
  },
  {
    id: "other",
    labels: {
      ja: "その他",
      en: "Other",
      ko: "기타",
      zh: "其他",
    },
  },
];

const gadgetSubCategories: SubCategoryDef[] = [
  {
    id: "charger",
    labels: {
      ja: "充電器",
      en: "Chargers",
      ko: "충전기",
      zh: "充电器",
    },
  },
  {
    id: "mouse",
    labels: {
      ja: "マウス",
      en: "Mice",
      ko: "마우스",
      zh: "鼠标",
    },
  },
  {
    id: "pc-monitor",
    labels: {
      ja: "PC・モニター",
      en: "PC & Monitors",
      ko: "PC·모니터",
      zh: "电脑与显示器",
    },
  },
  {
    id: "power-bank",
    labels: {
      ja: "モバイルバッテリー",
      en: "Power Banks",
      ko: "보조배터리",
      zh: "移动电源",
    },
  },
  {
    id: "usb-hub-accessories",
    labels: {
      ja: "USBハブ・周辺機器",
      en: "USB Hubs & Accessories",
      ko: "USB 허브·주변기기",
      zh: "USB集线器与周边",
    },
  },
  {
    id: "other",
    labels: {
      ja: "その他",
      en: "Other",
      ko: "기타",
      zh: "其他",
    },
  },
];

const byCategory: Partial<Record<CategorySlug, SubCategoryDef[]>> = {
  desk: deskSubCategories,
  gadget: gadgetSubCategories,
};

export function getSubCategoriesFor(category: CategorySlug): SubCategoryDef[] {
  return byCategory[category] ?? [];
}

export function getSubCategoryLabel(
  category: CategorySlug,
  id: SubCategoryId,
  locale: Locale,
): string | undefined {
  return getSubCategoriesFor(category).find((item) => item.id === id)?.labels[locale];
}

export function categoryHasSubTabs(category: CategorySlug): boolean {
  return Boolean(byCategory[category]?.length);
}
