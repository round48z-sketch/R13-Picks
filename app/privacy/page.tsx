import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "プライバシーポリシー",
  description: "R13 Picksの個人情報の取り扱い、Cookie、アクセス解析、広告に関する方針です。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="narrow prose">
      <header className="page-head">
        <p className="section-label">Privacy</p>
        <h1>プライバシーポリシー</h1>
      </header>
      <p>
        {siteConfig.name}（以下「当サイト」）は、ご利用にあたって取得する情報の取り扱いを、以下のとおり定めます。
      </p>
      <h2>個人情報の利用目的</h2>
      <p>
        お問い合わせの際に氏名・メールアドレス等をご提供いただく場合があります。これらの情報は、お問い合わせへの回答および必要な連絡のためにのみ使用します。
      </p>
      <h2>アクセス解析</h2>
      <p>
        当サイトでは、利用状況の把握のためにアクセス解析ツールを導入する場合があります。取得される情報は匿名で収集され、個人を特定するものではありません。
      </p>
      <h2>広告について</h2>
      <p>
        当サイトは、第三者配信の広告サービス（Google AdSense など）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するために Cookie を使用することがあります。
      </p>
      <p>
        Google AdSense を利用する場合、Cookie を無効にする方法や、パーソナライズド広告の停止方法については、Google のポリシーをご確認ください。
      </p>
      <h2>アフィリエイトプログラム</h2>
      <p>
        当サイトは、第三者のアフィリエイトプログラムに参加しています。商品紹介ページのリンクを経由して購入があった場合、当サイトが紹介料を受け取ることがあります。
      </p>
      <h2>免責事項</h2>
      <p>
        掲載する情報は、公開時点で確認したものです。商品の仕様、価格、在庫は変更されることがあります。購入前には、必ず販売元の情報をご確認ください。
      </p>
      <h2>お問い合わせ</h2>
      <p>
        本ポリシーに関するお問い合わせは、お問い合わせページ、または {siteConfig.email} までご連絡ください。
      </p>
    </div>
  );
}
