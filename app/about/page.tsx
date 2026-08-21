import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { categories } from "@/content/categories";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "R13 Picksについて",
  description:
    "R13 Picksは、暮らしに馴染むモノを紹介するメディアです。選ぶ基準と、サイトの考え方をご紹介します。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="narrow prose">
      <header className="page-head">
        <p className="section-label">About</p>
        <h1>R13 Picksについて</h1>
      </header>
      <p>
        {siteConfig.name}は、毎日の暮らしに馴染むモノだけを紹介するメディアです。新しいものを追うことより、手元に残る道具を静かに選ぶことを大切にしています。
      </p>
      <h2>選ぶ基準</h2>
      <p>
        派手であることより、日常に溶け込むこと。機能が多いことより、使い方がわかりやすいこと。流行であることより、一年後も使っていたいこと。この3つを、紹介するときの基準にしています。
      </p>
      <h2>扱うジャンル</h2>
      <p>
        現在は{" "}
        {categories.map((category) => category.name).join(" / ")} のカテゴリで記事を公開しています。オーディオやガジェットから、時計、ファッション、デスク、ライフスタイルまで、これから少しずつ増やしていきます。
      </p>
      <h2>記事の性質について</h2>
      <p>
        当サイトの商品紹介にはアフィリエイト広告を利用しています。紹介する商品は編集部の視点で選んでいますが、リンク経由の購入により紹介料を受け取ることがあります。詳細は「広告・アフィリエイトについて」をご覧ください。
      </p>
    </div>
  );
}
