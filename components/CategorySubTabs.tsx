"use client";

import {
  useMemo,
  useState,
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import type { Article } from "@/content/articles";
import type { CategorySlug } from "@/content/categories";
import type { Locale } from "@/content/i18n/config";
import { getUi } from "@/content/i18n/ui";
import {
  categoryHasSubTabs,
  getSubCategoriesFor,
  getSubCategoryLabel,
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

function normalizeQuery(value: string) {
  return value.trim().toLocaleLowerCase();
}

function articleSearchText(
  article: Article,
  category: CategorySlug,
  locale: Locale,
): string {
  const subId = (article.subCategory ?? "other") as SubCategoryId;
  const subLabel = getSubCategoryLabel(category, subId, locale) ?? "";
  return [
    article.title,
    article.productName,
    article.productType,
    article.slug,
    article.subCategory ?? "",
    subLabel,
    article.description,
    article.excerpt,
  ]
    .join(" ")
    .toLocaleLowerCase();
}

export function CategorySubTabs({
  category,
  articles,
  locale,
  emptyState,
}: CategorySubTabsProps) {
  const ui = getUi(locale);
  const [activeId, setActiveId] = useState<"all" | SubCategoryId>("all");
  const [query, setQuery] = useState("");

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

  const safeActiveId = tabs.some((tab) => tab.id === activeId) ? activeId : "all";
  const normalizedQuery = normalizeQuery(query);

  const visibleArticles = useMemo(() => {
    const bySub =
      safeActiveId === "all"
        ? articles
        : articles.filter(
            (article) => (article.subCategory ?? "other") === safeActiveId,
          );

    if (!normalizedQuery) return bySub;

    return bySub.filter((article) =>
      articleSearchText(article, category, locale).includes(normalizedQuery),
    );
  }, [articles, category, locale, normalizedQuery, safeActiveId]);

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="category-subtabs">
      <form className="category-search" role="search" onSubmit={handleSubmit}>
        <label className="category-search__field">
          <span className="sr-only">{ui.categorySearchAria}</span>
          <span className="category-search__icon" aria-hidden="true">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={ui.categorySearchPlaceholder}
            aria-label={ui.categorySearchAria}
            autoComplete="off"
            enterKeyHint="search"
            className="category-search__input"
          />
          {query.trim() ? (
            <button
              type="button"
              className="category-search__clear"
              aria-label={ui.categorySearchClearAria}
              onClick={() => setQuery("")}
            >
              <ClearIcon />
            </button>
          ) : null}
        </label>
      </form>

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
        ) : normalizedQuery ? (
          <p className="empty-state category-search__empty">{ui.categorySearchEmpty}</p>
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle
        cx="11"
        cy="11"
        r="6.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M16.2 16.2 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M7 7l10 10M17 7 7 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
