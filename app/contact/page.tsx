import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせ",
  description: "R13 Picksへのご意見、掲載に関するご相談はこちらからご連絡ください。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="narrow prose">
      <header className="page-head">
        <p className="section-label">Contact</p>
        <h1>お問い合わせ</h1>
      </header>
      <p>
        サイトに関するご意見、記事内容についてのご質問、掲載に関するご相談は、下記フォームよりお問い合わせください。
      </p>
      <ContactForm />
    </div>
  );
}
