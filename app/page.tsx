import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryNav } from "@/components/CategoryNav";
import { siteConfig } from "@/content/site";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";

const homeTitle = `${siteConfig.name}｜${siteConfig.tagline}`;

export const metadata: Metadata = {
  ...buildMetadata({
    title: homeTitle,
    description: siteConfig.description,
    path: "/",
  }),
  title: {
    absolute: homeTitle,
  },
};

export default function HomePage() {
  const latest = getAllArticles();

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="brand-mark" aria-hidden="true">
            R13
          </div>
          <p className="logo">{siteConfig.logo}</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </section>

      <div className="container">
        <CategoryNav />
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-label">New Picks</p>
            <h2>新着記事</h2>
          </div>
          <div className="card-grid">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
