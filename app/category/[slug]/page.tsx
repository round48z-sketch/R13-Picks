import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, getCategory } from "@/content/categories";
import { getArticlesByCategory } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    return {};
  }
  return buildMetadata({
    title: `${category.name}｜${category.ja}`,
    description: category.description,
    path: `/category/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="container">
      <header className="page-head">
        <p className="section-label">{category.name}</p>
        <h1>{category.ja}</h1>
        <p>{category.lead}</p>
      </header>

      {articles.length > 0 ? (
        <div className="card-grid" style={{ paddingBottom: 80 }}>
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="empty-state">このカテゴリの記事は準備中です。もうしばらくお待ちください。</p>
      )}
    </div>
  );
}
