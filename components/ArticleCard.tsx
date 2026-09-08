import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { getArticleCategory, getArticleThumbnail } from "@/lib/articles";
import { localizePath } from "@/lib/i18n/path";

type ArticleCardProps = {
  article: Article;
  locale?: Locale;
};

export function ArticleCard({ article, locale = "ja" }: ArticleCardProps) {
  const category = getArticleCategory(article);
  const ui = getUi(locale);
  const thumbnail = getArticleThumbnail(article);

  return (
    <article className="article-card">
      <Link
        href={localizePath(`/picks/${article.slug}`, locale)}
        className="article-card__link"
      >
        <div className="article-card__image">
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            sizes="(max-width: 979px) 92vw, 420px"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="article-card__body">
          <p className="eyebrow">{category?.name}</p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="text-link">{ui.readMore}</span>
        </div>
      </Link>
    </article>
  );
}
