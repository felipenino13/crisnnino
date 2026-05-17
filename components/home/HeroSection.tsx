import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GitBranch, MessageCircleMore } from "lucide-react";
import { hero, navigation } from "./content";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden bg-neutral-950 px-6 pb-14 pt-8 text-stone-100 sm:px-10 lg:px-16"
    >
      <Image
        src="/img/digital-product-creator-visual.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-72"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.94)_0%,rgba(10,10,10,0.82)_44%,rgba(10,10,10,0.38)_78%,rgba(10,10,10,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.16)_70%,#f8fafc_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(92vh-5rem)] max-w-6xl flex-col">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-normal text-amber-200/80">
              Cristian Niño
            </p>
            <p className="mt-2 text-sm text-slate-300">
              UX/UI Designer, Automation Builder & Digital Product Creator.
            </p>
          </div>

          <nav
            aria-label="Primary navigation"
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
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 font-medium text-slate-950 transition hover:bg-amber-200"
            >
              Let&apos;s Work Together
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </header>

        <div className="flex flex-1 items-center py-14">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
              Personal innovation hub for web products, automations, and AI experiments
            </p>
            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
              {hero.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-200">
              {hero.subheadline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              {hero.positioning}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Let&apos;s Work Together
                <MessageCircleMore className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
