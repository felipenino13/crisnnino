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

    // Honeypot anti-spam: silently accept bot submissions.
    const website = String(formData.get("website") ?? "");
    if (website.trim().length > 0) {
      setStatus("success");
      setMessage("Message sent.");
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
      setMessage("Thanks. I will get back to you soon.");
      formEl.reset();
    } catch {
      setStatus("error");
      setMessage("The message could not be sent. Please try again in a moment.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-left">
        <p className="text-sm font-semibold uppercase text-cyan-200">
          Contact
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
          Tell me what you are building
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Share the context, goal, and timeline. You can also email me directly
          at{" "}
          <a
            href="mailto:hola@crisnnino.com"
            className="font-medium text-lime-200 underline decoration-lime-200/40 underline-offset-4"
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
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-lg border border-cyan-300/18 bg-white/[0.035] px-4 py-3 text-cyan-50 placeholder:text-cyan-100/35 outline-none focus:border-cyan-300"
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
          placeholder="you@example.com"
          className="w-full rounded-lg border border-cyan-300/18 bg-white/[0.035] px-4 py-3 text-cyan-50 placeholder:text-cyan-100/35 outline-none focus:border-cyan-300"
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm text-neutral-200">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+57 300 000 0000"
            className="w-full rounded-lg border border-cyan-300/18 bg-white/[0.035] px-4 py-3 text-cyan-50 placeholder:text-cyan-100/35 outline-none focus:border-cyan-300"
            disabled={status === "loading"}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm text-neutral-200">
            Project type
          </label>
          <select
            id="projectType"
            name="projectType"
            className="w-full rounded-lg border border-cyan-300/18 bg-[#05060f] px-4 py-3 text-cyan-50 outline-none focus:border-cyan-300"
            defaultValue=""
            disabled={status === "loading"}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="digital-product">Digital product or MVP</option>
            <option value="web-platform">Website or landing system</option>
            <option value="automation">Automation or AI workflow</option>
            <option value="ux-ui">UX/UI design</option>
            <option value="consulting">Consulting or collaboration</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm text-neutral-200">
          Estimated budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-lg border border-cyan-300/18 bg-[#05060f] px-4 py-3 text-cyan-50 outline-none focus:border-cyan-300"
          defaultValue=""
          disabled={status === "loading"}
        >
          <option value="" disabled>
            Not sure yet
          </option>
          <option value="under-1000">Under USD 1,000</option>
          <option value="1000-3000">USD 1,000 - 3,000</option>
          <option value="3000-6000">USD 3,000 - 6,000</option>
          <option value="over-6000">Over USD 6,000</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm text-neutral-200">
          What do you want to build?
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Example: I need to validate a product idea, automate a workflow, or launch a scalable web experience."
          rows={5}
          className="w-full resize-none rounded-lg border border-cyan-300/18 bg-white/[0.035] px-4 py-3 text-cyan-50 placeholder:text-cyan-100/35 outline-none focus:border-cyan-300"
          required
          disabled={status === "loading"}
        />
      </div>

      {message && (
        <div
          aria-live="polite"
          className={`rounded-lg border px-4 py-3 text-sm ${
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
          className="w-full rounded-lg bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_0_34px_rgba(103,232,249,0.28)] transition hover:bg-lime-300 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Contact Me"}
        </button>
        <p className="mt-3 text-xs leading-5 text-slate-400">
          I respond to product, automation, consulting, and collaboration inquiries.
        </p>
      </div>
    </form>
  );
}
