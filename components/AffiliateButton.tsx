import { getAffiliateUrl } from "@/content/affiliate-links";

type AffiliateButtonProps = {
  slug: string;
  label: string;
  className?: string;
};

export function AffiliateButton({ slug, label, className }: AffiliateButtonProps) {
  const href = getAffiliateUrl(slug);

  return (
    <a
      href={href}
      className={`cta-button ${className ?? ""}`}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
    >
      {label}
    </a>
  );
}
