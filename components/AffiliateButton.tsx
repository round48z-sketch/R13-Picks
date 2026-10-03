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
  const isMoshimo = href.startsWith("//af.moshimo.com/");

  return (
    <a
      href={href}
      className={`cta-button ${className ?? ""}`}
      target="_blank"
      // Moshimo's provided code expects the referrer; `noreferrer` would suppress it.
      rel={isMoshimo ? "nofollow sponsored noopener" : "sponsored noopener noreferrer"}
      referrerPolicy={isMoshimo ? "no-referrer-when-downgrade" : undefined}
      onClick={tracking ? () => trackAffiliateClick(href, tracking) : undefined}
    >
      {label}
    </a>
  );
}
