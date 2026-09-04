import type { Locale } from "@/content/i18n/config";
import {
  aboutPages,
  affiliatePages,
  contactPages,
  privacyPages,
  type StaticPageCopy,
} from "@/content/i18n/pages";
import { ContactForm } from "@/components/ContactForm";

function StaticProse({ page }: { page: StaticPageCopy }) {
  return (
    <div className="narrow prose">
      <header className="page-head">
        <p className="section-label">{page.label}</p>
        <h1>{page.heading}</h1>
      </header>
      {page.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {page.sections?.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
      ))}
    </div>
  );
}

export function AboutView({ locale }: { locale: Locale }) {
  return <StaticProse page={aboutPages[locale]} />;
}

export function AffiliateView({ locale }: { locale: Locale }) {
  return <StaticProse page={affiliatePages[locale]} />;
}

export function PrivacyView({ locale }: { locale: Locale }) {
  return <StaticProse page={privacyPages[locale]} />;
}

export function ContactView({ locale }: { locale: Locale }) {
  const page = contactPages[locale];
  return (
    <div className="narrow prose">
      <header className="page-head">
        <p className="section-label">{page.label}</p>
        <h1>{page.heading}</h1>
      </header>
      {page.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ContactForm />
    </div>
  );
}
