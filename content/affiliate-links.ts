/**
 * アフィリエイトリンク一覧
 *
 * 差し替えは、このファイルの URL だけ変更してください。
 * 記事本文を触る必要はありません。
 *
 * キーは記事の slug と一致させます。
 */
export const affiliateLinks: Record<string, string> = {
  "denon-ah-c830ncw":
    "https://www.e-earphone.jp/collections/wireless_earphone/products/203172?_pos=72&_fid=b794a5e29&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=NpLWbpoFkh2Zm6tWdTJWFhXejvqIVh9eETDZo6e3dZS9DR9kJRc91pnMkMH34.H91zohDZS9DR9kbzvju.vDkRcZSpvQup1zDEL2ciYCDhJpDhL6PpnFk6qzXzLDJ6H27Awxxs00000024072001&utm_source=Pinterest&utm_medium=organic",
  "anker-soundcore-space-2":
    "https://www.e-earphone.jp/collections/4/products/723108?_pos=14&_fid=c7d5fec8a&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=LyPDNyaXFsoCMrcD9.HDXsnptu3Gfs0p-.KCarp79C_0K40FH4T0eyZSFSz7mwz0eIasKC_0K40FNIut8wuKF4TC_yu68yeIK-PoTWv5KsHRYsPcQyZXFr3InIPKHrzogbYxxs00000024072001&utm_source=Pinterest&utm_medium=organic",
  "everyday-minimal-watch":
    "https://www.amazon.co.jp/s?k=%E8%85%95%E6%99%82%E8%A8%88+%E3%83%A1%E3%83%B3%E3%82%BA",
};

export function getAffiliateUrl(slug: string) {
  return affiliateLinks[slug] ?? "https://www.amazon.co.jp/";
}
