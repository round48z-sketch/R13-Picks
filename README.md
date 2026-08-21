# R13 Picks

日常を少しだけ整える道具を紹介する、商品紹介・アフィリエイト向けウェブマガジンです。
Next.js で構成しており、Vercel にそのまま公開できます。

## 開発

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

Node.js が入っていない場合は、先に Node 22 以上を入れてください。

## 記事の追加

1. `content/articles.ts` の配列の先頭に記事オブジェクトを追加する
2. 商品画像を `public/images/articles/` に置く
3. `content/affiliate-links.ts` に、同じ `slug` でアフィリエイト URL を追加する

記事の URL は `/picks/スラッグ` になります。`seoTitle` と `description` が各記事の title / meta description / OGP に使われます。

## カテゴリの追加

`content/categories.ts` の配列にオブジェクトを足すと、トップ・メニュー・フッター・カテゴリページに自動で反映されます。

## Google AdSense

広告枠のコードは記事ページに残してあります。表示を始めるときは `content/ads.ts` の `adsenseEnabled` を `true` にしてください。

## アフィリエイトリンクの差し替え

`content/affiliate-links.ts` の URL だけ変更してください。記事本文を編集する必要はありません。

## 公開（Vercel）

1. GitHub にこのリポジトリを置く
2. [Vercel](https://vercel.com) で Import
3. 独自ドメインは Vercel の Domains から後で追加できます

本番 URL を固定する場合は、環境変数 `NEXT_PUBLIC_SITE_URL`（例: `https://r13picks.vercel.app`）を設定してください。OGP と sitemap に使われます。
