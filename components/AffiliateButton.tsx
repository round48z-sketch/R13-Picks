"use client";

import { getAffiliateUrl } from "@/content/affiliate-links";
import { trackAffiliateClick, type AffiliateClickContext } from "@/lib/analytics";

type AffiliateButtonProps = {
  slug: string;
  label: string;
  className?: string;
  tracking?: AffiliateClickContext;
};

export function AffiliateButton({ slug, label, className, tracking }: AffiliateButtonProps) {
  const href = getAffiliateUrl(slug);

  return (
    <a
      href={href}
      className={`cta-button ${className ?? ""}`}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={tracking ? () => trackAffiliateClick(href, tracking) : undefined}
    >
      {label}
    </a>
  );
}
