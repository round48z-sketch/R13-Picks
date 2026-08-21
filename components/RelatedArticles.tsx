import type { Article } from "@/content/articles";
import { ArticleCard } from "./ArticleCard";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="related">
      <p className="section-label">Related</p>
      <h2>関連記事</h2>
      <div className="card-grid card-grid--related">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
