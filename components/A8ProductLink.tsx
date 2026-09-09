"use client";

import { useEffect, useRef } from "react";

type A8ProductLinkProps = {
  /** Exact A8 product-link HTML snippet (do not alter before passing). */
  html: string;
  className?: string;
};

declare global {
  interface Window {
    a8adscript?: (target: string) => { showAd: (payload: unknown) => void };
  }
}

function loadExternalScript(src: string) {
  const absolute =
    src.startsWith("//") && typeof window !== "undefined"
      ? `${window.location.protocol}${src}`
      : src;

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${src}"], script[src="${absolute}"]`,
  );

  if (existing) {
    if (window.a8adscript) {
      return Promise.resolve();
    }
    return new Promise<void>((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
    });
  }

  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
      once: true,
    });
    document.body.appendChild(script);
  });
}

/**
 * Injects an A8.net product-link snippet so scripts execute under Next.js.
 * Script URL and showAd payload are taken from the provided HTML as-is.
 */
export function A8ProductLink({ html, className }: A8ProductLinkProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !html.trim()) {
      return;
    }

    host.replaceChildren();

    const template = document.createElement("template");
    template.innerHTML = html.trim();

    const externalSrcs: string[] = [];
    const inlineTexts: string[] = [];

    for (const node of Array.from(template.content.childNodes)) {
      if (node.nodeName === "SCRIPT") {
        const source = node as HTMLScriptElement;
        const src = source.getAttribute("src");
        if (src) {
          externalSrcs.push(src);
        } else if (source.textContent?.trim()) {
          inlineTexts.push(source.textContent);
        }
      } else {
        host.appendChild(node.cloneNode(true));
      }
    }

    let cancelled = false;
    const injectedInline: HTMLScriptElement[] = [];

    void (async () => {
      try {
        for (const src of externalSrcs) {
          await loadExternalScript(src);
          if (cancelled) {
            return;
          }
        }

        for (const text of inlineTexts) {
          if (cancelled) {
            return;
          }
          const inline = document.createElement("script");
          inline.type = "text/javascript";
          inline.text = text;
          document.body.appendChild(inline);
          injectedInline.push(inline);
        }
      } catch {
        // Keep layout intact even if the third-party script fails to load.
      }
    })();

    return () => {
      cancelled = true;
      for (const script of injectedInline) {
        script.remove();
      }
      host.replaceChildren();
    };
  }, [html]);

  return (
    <div
      ref={hostRef}
      className={className ? `a8-product-link ${className}` : "a8-product-link"}
      data-a8-product-link
    />
  );
}
