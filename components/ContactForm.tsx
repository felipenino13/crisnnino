"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // Honeypot anti-spam: si lo llenan, abortamos silenciosamente
    const website = String(formData.get("website") ?? "");
    if (website.trim().length > 0) {
      setStatus("success");
      setMessage("¡Mensaje enviado!");
      formEl.reset();
      return;
    }

    // Payload (JSON) hacia n8n
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      // extras opcionales (útiles para n8n)
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://n8n.crisnnino.com/webhook/formulario-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      setStatus("success");
      setMessage("¡Listo! Te contactaré pronto.");
      formEl.reset();
    } catch (err) {
      setStatus("error");
      setMessage("No se pudo enviar. Intenta de nuevo en unos segundos.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center">
        <h1 className="text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Hablemos de tu proyecto
        </h1>
        <p className="text-md leading-6 text-zinc-600 dark:text-zinc-400">
          Cuéntame qué necesitas y te respondo lo antes posible.
        </p>
      </div>

      {/* Honeypot (oculto) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Nombre */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm text-neutral-200">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
          required
          disabled={status === "loading"}
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm text-neutral-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tu@email.com"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
          required
          disabled={status === "loading"}
        />
      </div>

      {/* Teléfono */}
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm text-neutral-200">
          Número de celular
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+57 300 000 0000"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
          disabled={status === "loading"}
        />
      </div>

      {/* Mensaje */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-neutral-200">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto..."
          rows={5}
          className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
          required
          disabled={status === "loading"}
        />
      </div>

      {/* Feedback */}
      {message && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-600/40 text-emerald-200"
              : "border-red-600/40 text-red-200"
          }`}
        >
          {message}
        </div>
      )}

      {/* Botón */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
