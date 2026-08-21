/**
 * アフィリエイトリンク一覧
 *
 * 差し替えは、このファイルの URL だけ変更してください。
 * 記事本文を触る必要はありません。
 *
 * キーは記事の slug と一致させます。
 */
export const affiliateLinks: Record<string, string> = {
  "quiet-commute-wireless-earbuds":
    "https://www.amazon.co.jp/s?k=%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9%E3%82%A4%E3%83%A4%E3%83%9B%E3%83%B3",
  "focus-over-ear-headphones":
    "https://www.amazon.co.jp/s?k=%E3%83%98%E3%83%83%E3%83%89%E3%83%9B%E3%83%B3",
  "everyday-minimal-watch":
    "https://www.amazon.co.jp/s?k=%E8%85%95%E6%99%82%E8%A8%88+%E3%83%A1%E3%83%B3%E3%82%BA",
};

export function getAffiliateUrl(slug: string) {
  return affiliateLinks[slug] ?? "https://www.amazon.co.jp/";
}
