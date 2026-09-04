"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { getUi } from "@/content/i18n/ui";
import { getLocaleFromPathname } from "@/lib/i18n/path";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const ui = getUi(locale);
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
      setError(ui.formErrorNotReady);
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
          subject: `${ui.formSubject}（${String(data.get("name") ?? "").trim()}）`,
          from_name: "R13 Picks",
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        setStatus("error");
        setError(result.message || ui.formErrorGeneric);
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(ui.formErrorRetry);
    }
  }

  if (status === "success") {
    return (
      <p className="form-note form-note--success" role="status">
        {ui.formSuccess}
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="honeypot" aria-hidden="true">
        {ui.formCompany}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label>
        {ui.formName}
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        {ui.formEmail}
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        {ui.formMessage}
        <textarea name="message" rows={6} required />
      </label>
      {status === "error" ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="cta-button" disabled={status === "submitting"}>
        {status === "submitting" ? ui.formSubmitting : ui.formSubmit}
      </button>
    </form>
  );
}
