"use client";

import { useMemo, useState, type KeyboardEvent, type ReactNode } from "react";
import type { Article } from "@/content/articles";
import type { CategorySlug } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import {
  categoryHasSubTabs,
  getSubCategoriesFor,
  type SubCategoryId,
} from "@/content/subcategories";
import { ArticleCard } from "@/components/ArticleCard";

type CategorySubTabsProps = {
  category: CategorySlug;
  articles: Article[];
  locale: Locale;
  emptyState: ReactNode;
};

type TabItem = {
  id: "all" | SubCategoryId;
  label: string;
  count: number;
};

export function CategorySubTabs({
  category,
  articles,
  locale,
  emptyState,
}: CategorySubTabsProps) {
  const ui = getUi(locale);
  const [activeId, setActiveId] = useState<"all" | SubCategoryId>("all");

  const tabs = useMemo(() => {
    if (!categoryHasSubTabs(category)) {
      return [] as TabItem[];
    }

    const defs = getSubCategoriesFor(category);
    const counts = new Map<SubCategoryId, number>();
    for (const article of articles) {
      const id = (article.subCategory ?? "other") as SubCategoryId;
      counts.set(id, (counts.get(id) ?? 0) + 1);
    }

    const items: TabItem[] = [
      {
        id: "all",
        label: `${ui.subCategoryAll} (${articles.length})`,
        count: articles.length,
      },
    ];

    for (const def of defs) {
      const count = counts.get(def.id) ?? 0;
      if (count === 0) continue;
      items.push({
        id: def.id,
        label: `${def.labels[locale]} (${count})`,
        count,
      });
    }

    return items;
  }, [articles, category, locale, ui.subCategoryAll]);

  const visibleArticles = useMemo(() => {
    if (activeId === "all") return articles;
    return articles.filter(
      (article) => (article.subCategory ?? "other") === activeId,
    );
  }, [activeId, articles]);

  // Keep selected tab valid if counts change (e.g. locale switch with same data).
  const safeActiveId = tabs.some((tab) => tab.id === activeId) ? activeId : "all";

  if (tabs.length === 0) {
    return articles.length > 0 ? (
      <div className="card-grid category-subtabs__grid">{renderCards(articles, locale)}</div>
    ) : (
      <>{emptyState}</>
    );
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.id === safeActiveId);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + step + tabs.length) % tabs.length];
    setActiveId(next.id);
    document.getElementById(`category-subtab-${next.id}`)?.focus();
  }

  return (
    <div className="category-subtabs">
      <div
        className="category-subtabs__list"
        role="tablist"
        aria-label={ui.subCategoryTabsAria}
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab) => {
          const selected = tab.id === safeActiveId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`category-subtab-${tab.id}`}
              aria-selected={selected}
              aria-controls="category-subtab-panel"
              tabIndex={selected ? 0 : -1}
              className={
                selected
                  ? "category-subtabs__tab is-active"
                  : "category-subtabs__tab"
              }
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="category-subtab-panel"
        aria-labelledby={`category-subtab-${safeActiveId}`}
        className="category-subtabs__panel"
      >
        {visibleArticles.length > 0 ? (
          <div className="card-grid category-subtabs__grid">
            {renderCards(visibleArticles, locale)}
          </div>
        ) : (
          emptyState
        )}
      </div>
    </div>
  );
}

function renderCards(articles: Article[], locale: Locale) {
  return articles.map((article) => (
    <ArticleCard key={article.slug} article={article} locale={locale} />
  ));
}
