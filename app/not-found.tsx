"use client";

import { usePathname } from "next/navigation";
import { getUi } from "@/content/i18n/ui";
import { getLocaleFromPathname } from "@/lib/i18n/path";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getUi(locale);

  return (
    <div className="narrow page-head">
      <p className="section-label">404</p>
      <h1>{ui.notFoundTitle}</h1>
      <p>{ui.notFoundBody}</p>
    </div>
  );
}
