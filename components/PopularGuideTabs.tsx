"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

type Tab = {
  id: string;
  label: string;
  panel: ReactNode;
};

type PopularGuideTabsProps = {
  tabs: Tab[];
  defaultId: string;
  ariaLabel: string;
};

export function PopularGuideTabs({ tabs, defaultId, ariaLabel }: PopularGuideTabsProps) {
  const [activeId, setActiveId] = useState(defaultId);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = tabs.findIndex((tab) => tab.id === activeId);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + step + tabs.length) % tabs.length];
    setActiveId(next.id);
    document.getElementById(`guide-tab-${next.id}`)?.focus();
  }

  return (
    <div className="guide-tabs">
      <div
        className="guide-tabs__list"
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab) => {
          const selected = tab.id === activeId;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`guide-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`guide-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className={selected ? "guide-tabs__tab is-active" : "guide-tabs__tab"}
              onClick={() => setActiveId(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`guide-panel-${tab.id}`}
          aria-labelledby={`guide-tab-${tab.id}`}
          hidden={tab.id !== activeId}
          className="guide-tabs__panel"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
