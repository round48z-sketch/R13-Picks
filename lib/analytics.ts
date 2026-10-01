import { sendGAEvent } from "@next/third-parties/google";

export type AffiliateClickContext = {
  articleSlug: string;
  articleTitle: string;
  productName?: string;
  category?: string;
  language: string;
};

function getAffiliateNetwork(url: string) {
  try {
    return new URL(url).hostname === "px.a8.net" ? "A8" : undefined;
  } catch {
    return undefined;
  }
}

export function trackAffiliateClick(destinationUrl: string, context: AffiliateClickContext) {
  try {
    const params: Record<string, string> = {
      article_slug: context.articleSlug,
      article_title: context.articleTitle,
      destination_url: destinationUrl,
      // gtag reserves `language` for the browser-language field (ul), so it would not arrive as an event parameter.
      content_language: context.language,
    };
    if (context.productName) params.product_name = context.productName;
    if (context.category) params.category = context.category;
    const network = getAffiliateNetwork(destinationUrl);
    if (network) params.affiliate_network = network;

    sendGAEvent("event", "affiliate_click", params);
  } catch {
    // Analytics must never block navigation to the shop.
  }
}
