import type { Article } from "@/content/articles";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles({
  articles,
  locale = "ja",
}: {
  articles: Article[];
  locale?: Locale;
}) {
  if (articles.length === 0) {
    return null;
  }

  const ui = getUi(locale);

  return (
    <section className="related">
      <p className="section-label">{ui.relatedLabel}</p>
      <h2>{ui.relatedTitle}</h2>
      <div className="card-grid card-grid--related">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} locale={locale} />
        ))}
      </div>
    </section>
  );
}
