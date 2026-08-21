"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/content/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`R13 Picks お問い合わせ（${name}）`);
    const body = encodeURIComponent(`お名前: ${name}\nメール: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="form-note">
        メールアプリが開きます。開かない場合は {siteConfig.email} まで直接ご連絡ください。
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        お名前
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        メールアドレス
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        メッセージ
        <textarea name="message" rows={6} required />
      </label>
      <button type="submit" className="cta-button">
        送信する
      </button>
    </form>
  );
}
