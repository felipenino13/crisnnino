import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="px-6 pb-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-lg border border-cyan-300/18 bg-white/[0.045] px-6 py-6 text-sm text-cyan-100/70 shadow-[0_0_44px_rgba(103,232,249,0.08)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-cyan-50">Cristian Nino</p>
          <p>
            Personal innovation hub for digital products, automations, and
            scalable business ideas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/22 px-4 py-2 text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            Volver arriba
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 font-medium text-slate-950 transition hover:bg-lime-300"
          >
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
