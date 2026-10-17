import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/articles";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { getArticleCategory, getArticleThumbnail } from "@/lib/articles";
import { localizePath } from "@/lib/i18n/path";

type EditorsPicksProps = {
  articles: Article[];
  locale?: Locale;
};

const ROUNDUP_SLUGS = new Set([
  "beauty-appliances-5-picks",
  "desk-setup-5-picks",
  "wireless-earbuds-under-10000",
  "refurbished-laptops-5-picks",
  "mens-watch-recommendations-10",
  "work-gadgets-recommendations-10",
  "black-wireless-earbuds",
]);

function isRoundupThumb(article: Article) {
  return Boolean(article.guideThumbnailImage) || ROUNDUP_SLUGS.has(article.slug);
}

function EditorsPickCard({
  article,
  locale,
  variant,
}: {
  article: Article;
  locale: Locale;
  variant: "feature" | "side";
}) {
  const ui = getUi(locale);
  const category = getArticleCategory(article);
  const thumbnail = article.guideThumbnailImage ?? getArticleThumbnail(article);
  const roundup = isRoundupThumb(article);

  return (
    <article
      className={
        variant === "feature"
          ? "editors-picks__card editors-picks__card--feature"
          : "editors-picks__card editors-picks__card--side"
      }
    >
      <Link
        href={localizePath(`/picks/${article.slug}`, locale)}
        className="editors-picks__link"
      >
        <div
          className={
            roundup
              ? "editors-picks__image editors-picks__image--roundup"
              : "editors-picks__image"
          }
        >
          <Image
            src={thumbnail.src}
            alt={thumbnail.alt}
            fill
            sizes={
              variant === "feature"
                ? "(max-width: 979px) 92vw, 640px"
                : "(max-width: 979px) 92vw, 360px"
            }
            unoptimized={thumbnail.src.includes("thumbnail.image.rakuten.co.jp/@0_gold/")}
            style={
              roundup
                ? { objectFit: "contain", objectPosition: "center" }
                : { objectFit: "cover", objectPosition: "center" }
            }
          />
        </div>
        <div className="editors-picks__body">
          <p className="editors-picks__meta">{category?.name}</p>
          <h3>{article.title}</h3>
          {variant === "feature" ? (
            <p className="editors-picks__excerpt">{article.excerpt}</p>
          ) : null}
          <span className="text-link">{ui.readMore}</span>
        </div>
      </Link>
    </article>
  );
}

export function EditorsPicks({ articles, locale = "ja" }: EditorsPicksProps) {
  const ui = getUi(locale);
  const [feature, ...side] = articles;

  if (!feature) {
    return null;
  }

  return (
    <section
      className="section section--home-editorial"
      id="editors-picks"
      aria-label={ui.editorsPicksAria}
    >
      <div className="container">
        <div className="section-head section-head--editorial">
          <p className="section-label">{ui.editorsPicksLabel}</p>
          <h2>{ui.editorsPicksTitle}</h2>
          <p className="section-lead">{ui.editorsPicksLead}</p>
        </div>
        <div className="editors-picks">
          <EditorsPickCard article={feature} locale={locale} variant="feature" />
          {side.length > 0 ? (
            <div className="editors-picks__side">
              {side.slice(0, 2).map((article) => (
                <EditorsPickCard
                  key={article.slug}
                  article={article}
                  locale={locale}
                  variant="side"
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
