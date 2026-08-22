"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") ?? "")) {
      setStatus("success");
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setError("送信の準備がまだ完了していません。しばらくしてからお試しください。");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
          subject: `R13 Picks お問い合わせ（${String(data.get("name") ?? "").trim()}）`,
          from_name: "R13 Picks",
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setError(result.message || "送信に失敗しました。時間をおいてもう一度お試しください。");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("送信に失敗しました。通信状況を確認してもう一度お試しください。");
    }
  }

  if (status === "success") {
    return (
      <p className="form-note form-note--success" role="status">
        お問い合わせを送信しました。
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="honeypot" aria-hidden="true">
        会社名
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
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
      {status === "error" ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="cta-button" disabled={status === "submitting"}>
        {status === "submitting" ? "送信中…" : "送信する"}
      </button>
    </form>
  );
}
