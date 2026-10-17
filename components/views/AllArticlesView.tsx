import { ArticleCard } from "@/components/ArticleCard";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import { getAllArticles } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";

export function AllArticlesView({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const articles = getAllArticles().map((article) => localizeArticle(article, locale));

  return (
    <div className="container all-articles">
      <header className="page-head section-head--editorial all-articles__head">
        <p className="section-label">{ui.allArticlesLabel}</p>
        <h1>{ui.allArticlesTitle}</h1>
        <p>{ui.allArticlesLead}</p>
      </header>

      {articles.length > 0 ? (
        <div className="card-grid card-grid--all-articles">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} locale={locale} />
          ))}
        </div>
      ) : (
        <p className="empty-state">{ui.emptyCategory}</p>
      )}
    </div>
  );
}
