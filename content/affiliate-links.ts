/**
 * アフィリエイトリンク一覧
 *
 * 差し替えは、このファイルの URL だけ変更してください。
 * 記事本文を触る必要はありません。
 *
 * キーは記事の slug と一致させます。
 */
export const affiliateLinks: Record<string, string> = {
  "life-pocket-slim-wallet":
    "https://store.life-pocket.jp/products/wl005?a8=adkgodm_Sc4JyBkGbD.K1nrE2B8vUlkJJDUJmn5EIJjGUeGS.eWGCdslSlwEpKwGCYmcUJjGUeGSoYNBLKNUSeWJjdNXLdCYUQk4W7bHWc.4-nbTFds_SnIYhYkUXnw4-2Axxs00000022041001&utm_source=Pinterest&utm_medium=organic",
  "sony-ult-wear":
    "https://www.e-earphone.jp/collections/4/products/448872?_pos=11&_fid=affa88a7e&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=T-.yc-WAKoiLgv4y6MkyAobERsCnGorEzMlLWvE56LOrl3rKk3mr8-NUKUF57SFr8XWolLOrl3rKcXsRJSslK3mLO-sYJ-8Xlz.imphPGvk4lvhUw-NAKvCXbX.lkvFidt_xxs00000024072001&utm_source=Pinterest&utm_medium=organic",
  "final-ze3000-sv":
    "https://www.e-earphone.jp/collections/wireless_earphone/products/526758?_pos=19&_fid=6e2867c79&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=niZoXihHJY_GcdAo7NuoHYzBK6f-yYgBeNaGhdBR7G.gajgJujbg0iITJT8RtL8g0EhYaG.gajgJXE6KrL6aJjbG.i65ri0EaeZ_b2Qqyduqu2ZTCiIHJdfEzEZaud8_4FPxxs00000024072001&utm_source=Pinterest&utm_medium=organic",
  "audio-technica-ath-sq1tw2nc":
    "https://www.e-earphone.jp/collections/wireless_earphone/products/697885?_pos=9&_fid=54d1ab55a&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=3k7Hqk8V-1u4POZHS5pHV1fanBcjA1_aD5z48OaTS46_zN_-pNC_okRQ-QyTLdy_ol81z46_zN_-qlBnidBz-NC46kBUikolzD7uCJ0mAOpVUJ0OgkRV-Oclfl7zpOyu.G9xxs00000024072001&utm_source=Pinterest&utm_medium=organic",
  "brillamico-lily-46mm-black-silver":
    "https://brillamico.jp/products/lily-46mm-black-x-silver-%E9%9D%A9%E3%83%99%E3%83%AB%E3%83%88?a8=lvjryv9iBgdKGi15efOi4j1EfLFa1g-rjf1K9TYXNK3L1zLBOzVLwvDqBq2XIR2Lwo9g1K3L1zLByoMESRM1BzVK3vMcSvwo1hjdV6mAJTW-46j-tvDiBTNoWoj1cT2dnp4xxs00000019504001&utm_source=Pinterest&utm_medium=organic",
  "denon-ah-c830ncw":
    "https://www.e-earphone.jp/collections/wireless_earphone/products/203172?_pos=72&_fid=b794a5e29&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=NpLWbpoFkh2Zm6tWdTJWFhXejvqIVh9eETDZo6e3dZS9DR9kJRc91pnMkMH34.H91zohDZS9DR9kbzvju.vDkRcZSpvQup1zDEL2ciYCDhJpDhL6PpnFk6qzXzLDJ6H27Awxxs00000024072001&utm_source=Pinterest&utm_medium=organic",
  "anker-soundcore-space-2":
    "https://www.e-earphone.jp/collections/4/products/723108?_pos=14&_fid=c7d5fec8a&_ss=c&filter.p.m.custom.is_on_sale=%E8%B2%A9%E5%A3%B2%E4%B8%AD&a8=LyPDNyaXFsoCMrcD9.HDXsnptu3Gfs0p-.KCarp79C_0K40FH4T0eyZSFSz7mwz0eIasKC_0K40FNIut8wuKF4TC_yu68yeIK-PoTWv5KsHRYsPcQyZXFr3InIPKHrzogbYxxs00000024072001&utm_source=Pinterest&utm_medium=organic",
};

export function getAffiliateUrl(slug: string) {
  return affiliateLinks[slug] ?? "https://www.amazon.co.jp/";
}
