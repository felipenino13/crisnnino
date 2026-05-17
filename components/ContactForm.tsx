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

    // Honeypot anti-spam: si lo llenan, abortamos silenciosamente.
    const website = String(formData.get("website") ?? "");
    if (website.trim().length > 0) {
      setStatus("success");
      setMessage("Mensaje enviado.");
      formEl.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      projectType: String(formData.get("projectType") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
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
      setMessage("Listo. Te contactare pronto.");
      formEl.reset();
    } catch {
      setStatus("error");
      setMessage("No se pudo enviar. Intenta de nuevo en unos segundos.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300/80">
          Formulario
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">
          Hablemos de tu proyecto
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Cuentame contexto, objetivo y tiempos. Si prefieres, tambien puedes
          escribirme directo a{" "}
          <a
            href="mailto:hola@crisnnino.com"
            className="font-medium text-amber-200 underline decoration-amber-200/40 underline-offset-4"
          >
            hola@crisnnino.com
          </a>
          .
        </p>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm text-neutral-200">
            Numero de celular
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

        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm text-neutral-200">
            Tipo de proyecto
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none focus:border-neutral-600"
            defaultValue=""
            disabled={status === "loading"}
          >
            <option value="" disabled>
              Selecciona una opcion
            </option>
            <option value="landing-page">Landing page o sitio web</option>
            <option value="redesign">Rediseno UX/UI</option>
            <option value="automation">Automatizacion con n8n</option>
            <option value="frontend">Desarrollo frontend</option>
            <option value="consulting">Consultoria o colaboracion</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm text-neutral-200">
          Presupuesto estimado
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 outline-none focus:border-neutral-600"
          defaultValue=""
          disabled={status === "loading"}
        >
          <option value="" disabled>
            No estoy seguro aun
          </option>
          <option value="under-1000">Menos de USD 1.000</option>
          <option value="1000-3000">USD 1.000 - 3.000</option>
          <option value="3000-6000">USD 3.000 - 6.000</option>
          <option value="over-6000">Mas de USD 6.000</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-neutral-200">
          Que necesitas resolver
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Ejemplo: necesito una landing para generar leads, mejorar conversion o automatizar el flujo de contacto."
          rows={5}
          className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
          required
          disabled={status === "loading"}
        />
      </div>

      {message && (
        <div
          aria-live="polite"
          className={`rounded-xl border px-4 py-3 text-sm ${
            status === "success"
              ? "border-emerald-600/40 text-emerald-200"
              : "border-red-600/40 text-red-200"
          }`}
        >
          {message}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Solicitar conversacion"}
        </button>
        <p className="mt-3 text-xs leading-5 text-slate-400">
          Respondo consultas laborales, proyectos freelance y colaboraciones.
        </p>
      </div>
    </form>
  );
}
