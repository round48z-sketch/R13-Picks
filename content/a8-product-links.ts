/**
 * A8.net 商品リンク素材（HTMLスニペット）
 *
 * 提供コードは改変せずそのまま保持する。
 * キーは記事の slug と一致させる。
 */
export const a8ProductLinks: Record<string, string> = {
  "tamas-tbs86k":
    '<span class="a8ad 4AHHahx-g7-vuKvizt"></span><script type="text/javascript" src="//statics.a8.net/ad/ad.js"></script><script type="text/javascript">a8adscript(\'body\').showAd({"req": {"mat":"4BAFPE+62I4KA+54VA+BWGDT","alt":"商品リンク","id":"4AHHahx-g7-vuKvizt"},"goods": {"ejp":"h"+"ttps://shop.tamadenco.co.jp/product/tbs86k/","imu":"h"+"ttps://shop.tamadenco.co.jp/wp-content/uploads/2026/04/TBS86K_2.jpg"}});</script>',
  "moondrop-space-travel-2-ultra":
    '<span class="a8ad 4AGxfGC-g7-vuKTbrb"></span><script type="text/javascript" src="//statics.a8.net/ad/ad.js"></script><script type="text/javascript">a8adscript(\'body\').showAd({"req": {"mat":"4BA2HB+8P61QY+55QO+BWGDT","alt":"商品リンク","id":"4AGxfGC-g7-vuKTbrb"},"goods": {"ejp":"h"+"ttps://www.e-earphone.jp/collections/wireless_earphone/products/640999?_pos=23&_fid=95576100c&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD","imu":"h"+"ttps://www.e-earphone.jp/cdn/shop/files/865412_2594797_1800x1800.jpg?v=1759997605"}});</script>',
};

export function getA8ProductLinkHtml(slug: string) {
  return a8ProductLinks[slug];
}
