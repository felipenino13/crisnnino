"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Role = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
  createdAt: number;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

type ChatWidgetProps = {
  title?: string;
  subtitle?: string;
  endpoint: string; // <-- ahora obligatorio
  persistKey?: string;
};

export default function ChatWidget({
  title = "Cris Bot",
  subtitle = "Consultas sobre servicios web, automatización y proyectos.",
  endpoint,
  persistKey = "crisnnino_chat_v1",
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(persistKey);
      if (raw) setMessages(JSON.parse(raw));
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(persistKey, JSON.stringify(messages));
    } catch {}
  }, [messages, persistKey]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isSending]);

  const canSend = useMemo(() => input.trim().length > 0 && !isSending, [input, isSending]);

  async function sendToBackend(userText: string): Promise<string> {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Enviamos también el historial por si tu agent lo usa
      body: JSON.stringify({
        message: userText,
        history: messages.slice(-10).map((m) => ({ role: m.role, content: m.content })),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
        ts: new Date().toISOString(),
      }),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    // Soporta respuesta JSON { reply: "..." } o texto plano
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const data = (await res.json()) as { reply?: string; message?: string; output?: string };
      return data.reply ?? data.message ?? data.output ?? "OK";
    }

    const text = await res.text();
    return text || "OK";
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || isSending) return;

    setInput("");

    const userMsg: ChatMessage = {
      id: uid(),
      role: "user",
      content: text,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsSending(true);

    try {
      const reply = await sendToBackend(text);
      const botMsg: ChatMessage = {
        id: uid(),
        role: "assistant",
        content: reply,
        createdAt: Date.now(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: "Ups… no pude conectar con el agente en este momento. Intenta de nuevo.",
          createdAt: Date.now(),
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (canSend) handleSend();
    }
  }

  function clearChat() {
    setMessages([]);
    try {
      localStorage.removeItem(persistKey);
    } catch {}
  }

  return (
    <div className="w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-950/40 shadow-sm">
      <div className="flex items-start justify-between gap-4 border-b border-neutral-800 px-4 py-4">
        <div>
          <div className="text-sm font-semibold text-neutral-50">{title}</div>
          <div className="mt-1 text-xs text-neutral-400">{subtitle}</div>
        </div>
        <button
          type="button"
          onClick={clearChat}
          className="rounded-xl border border-neutral-800 px-3 py-2 text-xs text-neutral-200 hover:border-neutral-600"
        >
          Limpiar
        </button>
      </div>

      <div ref={listRef} className="h-[420px] overflow-y-auto px-4 py-4">
        {messages.length === 0 ? (
          <div className="rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-400">
            Escribe un mensaje para iniciar la conversación.
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-white text-black"
                      : "border border-neutral-800 bg-neutral-950 text-neutral-100"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{m.content}</div>
                  <div className={`mt-2 text-[11px] ${m.role === "user" ? "text-black/60" : "text-neutral-400"}`}>
                    {formatTime(m.createdAt)}
                  </div>
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-300">
                  Escribiendo…
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t border-neutral-800 p-4">
        <div className="flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={2}
            placeholder="Escribe tu mensaje…"
            className="flex-1 resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
            disabled={isSending}
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!canSend}
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 disabled:opacity-60"
          >
            Enviar
          </button>
        </div>

        <div className="mt-2 text-xs text-neutral-500">
          Enter para enviar · Shift+Enter para salto de línea
        </div>
      </div>
    </div>
  );
}
