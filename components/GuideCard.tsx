import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { getArticleCategory, getArticleThumbnail } from "@/lib/articles";
import { localizePath } from "@/lib/i18n/path";

type GuideCardProps = {
  article: Article;
  locale?: Locale;
};

export function GuideCard({ article, locale = "ja" }: GuideCardProps) {
  const category = getArticleCategory(article);
  const ui = getUi(locale);
  const thumbnail = getArticleThumbnail(article);

  return (
    <article className="guide-card">
      <Link
        href={localizePath(`/picks/${article.slug}`, locale)}
        className="guide-card__link"
      >
        <div className="guide-card__image guide-card__image--roundup-thumb">
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            sizes="(max-width: 639px) 92vw, (max-width: 979px) 45vw, 240px"
          />
        </div>
        <div className="guide-card__body">
          <p className="guide-card__meta">
            <span>{ui.popularGuidesKind}</span>
            {category ? <span aria-hidden="true">·</span> : null}
            {category ? <span>{category.name}</span> : null}
          </p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <span className="guide-card__cta">{ui.popularGuidesCta}</span>
        </div>
      </Link>
    </article>
  );
}
