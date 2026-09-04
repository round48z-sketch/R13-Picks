import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { getCategory } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import { getCategoryCopy } from "@/content/i18n/categories";
import { getUi } from "@/content/i18n/ui";
import { getArticlesByCategory } from "@/lib/articles";
import { localizeArticle } from "@/lib/i18n/articles";

export function CategoryView({ slug, locale }: { slug: string; locale: Locale }) {
  const category = getCategory(slug);
  if (!category) {
    notFound();
  }

  const copy = getCategoryCopy(locale, category.slug);
  const ui = getUi(locale);
  const articles = getArticlesByCategory(category.slug).map((article) =>
    localizeArticle(article, locale),
  );

  return (
    <div className="container">
      <header className="page-head">
        <p className="section-label">{category.name}</p>
        <h1>{copy.localName}</h1>
        <p>{copy.lead}</p>
      </header>

      {articles.length > 0 ? (
        <div className="card-grid" style={{ paddingBottom: 80 }}>
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
