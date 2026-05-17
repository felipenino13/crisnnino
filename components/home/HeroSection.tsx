import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GitBranch, MessageCircleMore } from "lucide-react";
import { TypingTitle } from "@/components/TypingTitle";
import { navigation, stack, trustSignals } from "./content";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] overflow-hidden bg-slate-950 px-6 pb-12 pt-8 text-stone-100 sm:px-10 lg:px-16"
    >
      <Image
        src="/img/hero-portfolio-visual.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.96)_0%,rgba(15,23,42,0.86)_42%,rgba(15,23,42,0.46)_78%,rgba(15,23,42,0.38)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.16)_0%,rgba(15,23,42,0.18)_68%,#f7f1e8_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(88vh-5rem)] max-w-6xl flex-col">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
              Cristian Nino
            </p>
            <p className="mt-2 text-sm text-slate-300">
              UX/UI, landing pages, CRO, SEO, automatizacion y desarrollo frontend.
            </p>
          </div>

          <nav
            aria-label="Navegacion principal"
            className="flex flex-wrap items-center gap-3 text-sm"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://github.com/felipenino13"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-slate-100 transition hover:border-amber-200/60 hover:text-amber-100"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 font-medium text-slate-950 transition hover:bg-amber-200"
            >
              Trabajemos juntos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
              Disponible para oportunidades laborales, freelance y consultoria
            </div>
            <div className="mt-8 text-balance">
              <TypingTitle text="Cristian Nino" />
            </div>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-200">
              Diseno y construyo experiencias web que convierten trafico en
              conversaciones reales: landing pages, CRO, SEO, automatizacion y
              frontend para equipos que necesitan claridad y velocidad.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Hablemos de tu proyecto
                <MessageCircleMore className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
              Propuesta de valor
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              {trustSignals.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-200" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {stack.slice(0, 6).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
