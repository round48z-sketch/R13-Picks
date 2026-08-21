import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles";
import { getArticleCategory } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  const category = getArticleCategory(article);

  return (
    <article className="article-card">
      <Link href={`/picks/${article.slug}`} className="article-card__link">
        <div className="article-card__image">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            sizes="(max-width: 979px) 92vw, 420px"
          />
        </div>
        <div className="article-card__body">
          <p className="eyebrow">{category?.name}</p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="text-link">詳しく見る</span>
        </div>
      </Link>
    </article>
  );
}
