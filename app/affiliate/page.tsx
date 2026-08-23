import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "広告・アフィリエイトについて",
  description:
    "R13 Picksの広告掲載とアフィリエイトプログラムについての説明です。記事にはPR表記を表示しています。",
  path: "/affiliate",
});

export default function AffiliatePage() {
  return (
    <div className="narrow prose">
      <header className="page-head">
        <p className="section-label">Disclosure</p>
        <h1>広告・アフィリエイトについて</h1>
      </header>
      <p>
        {siteConfig.name}は、コンテンツを無料でお届けするために、アフィリエイト広告および第三者配信広告を利用します。
      </p>
      <h2>アフィリエイト広告</h2>
      <p>
        商品紹介記事には、Amazonなどの販売サイトへのアフィリエイトリンクを掲載しています。リンク経由で商品が購入された場合、当サイトが紹介料を受け取ることがあります。商品価格が利用者に上乗せされることはありません。
      </p>
      <p>
        アフィリエイトを利用している記事では、ページ上部に「PR｜この記事にはアフィリエイト広告を含みます」と表示します。
      </p>
      <h2>記事の選定について</h2>
      <p>
        紹介する商品は、編集部の視点で選んでいます。報酬の有無だけで掲載を決めることはしません。ただし、在庫状況や販売ページの都合により、リンク先が変わる場合があります。
      </p>
      <h2>Google AdSense</h2>
      <p>
        当サイトでは、Google AdSense などの広告配信を将来導入する予定です。広告は記事本文の合間やページ下部などに表示されます。表示される広告の内容は、広告配信事業者の仕組みに基づきます。
      </p>
      <h2>お問い合わせ</h2>
      <p>
        広告掲載や記事内容についてのご質問は、お問い合わせページよりご連絡ください。
      </p>
    </div>
  );
}
