import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="px-6 pb-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-lg border border-slate-200 bg-white px-6 py-6 text-sm text-slate-600 shadow-[0_16px_40px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-950">Cristian Niño</p>
          <p>
            Personal innovation hub for digital products, automations, and
            scalable business ideas.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-300 hover:text-slate-950"
          >
            Volver arriba
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 font-medium text-white transition hover:bg-slate-800"
          >
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
