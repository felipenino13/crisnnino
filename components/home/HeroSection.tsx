import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitBranch, MessageCircleMore } from "lucide-react";
import { hero, navigation } from "./content";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-[#05060f] px-6 pb-14 pt-8 text-cyan-50 sm:px-10 lg:px-16"
    >
      <Image
        src="/img/cyberpunk-product-hub-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-78"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,15,0.98)_0%,rgba(5,6,15,0.88)_42%,rgba(5,6,15,0.48)_76%,rgba(5,6,15,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,15,0.02)_0%,rgba(5,6,15,0.16)_70%,#05060f_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(244,114,182,0.045)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(92vh-5rem)] max-w-6xl flex-col">
        <header className="flex flex-col gap-6 border-b border-cyan-300/20 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-normal text-cyan-200">
              Cristian Niño
            </p>
            <p className="mt-2 text-sm text-cyan-100/70">
              UX/UI Designer, Automation Builder y Digital Product Creator.
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
                className="rounded-full px-3 py-2 text-cyan-100/75 transition hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://github.com/felipenino13"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 px-4 py-2 text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/10"
            >
              <GitBranch className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 font-medium text-slate-950 shadow-[0_0_32px_rgba(103,232,249,0.32)] transition hover:bg-lime-300"
            >
              Trabajemos juntos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </header>

        <div className="flex flex-1 items-center py-14">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm text-lime-100">
              Hub personal de productos web, automatizaciones e ideas con IA
            </p>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] text-white drop-shadow-[0_0_28px_rgba(103,232,249,0.22)] sm:text-7xl lg:text-8xl">
              {hero.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-cyan-50/90">
              {hero.subheadline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-cyan-100/70">
              {hero.positioning}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#proyectos"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-medium text-slate-950 shadow-[0_0_36px_rgba(103,232,249,0.36)] transition hover:bg-lime-300"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/35 px-5 py-3 font-medium text-white transition hover:border-fuchsia-200 hover:bg-fuchsia-300/10"
              >
                Trabajemos juntos
                <MessageCircleMore className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
