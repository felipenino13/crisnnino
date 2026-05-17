import Link from "next/link";
import { BriefcaseBusiness, FileText, GitBranch, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contacto" className="px-6 pb-14 pt-6 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-2xl bg-[#c85632] p-8 text-white shadow-[0_30px_80px_rgba(200,86,50,0.22)]">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-100/80">
            Contacto
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Si buscas a alguien que una diseno, conversion y ejecucion tecnica,
            conversemos.
          </h2>
          <p className="mt-5 text-base leading-7 text-orange-50/90">
            Este sitio esta construido para facilitar una decision: entender
            rapido si encajo con tu necesidad y dejar un camino corto para
            hablar.
          </p>

          <div className="mt-8 space-y-4 text-sm leading-7 text-orange-50/90">
            <div className="flex items-start gap-3">
              <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Proyectos ideales: landing pages, redisenos UX/UI, optimizacion
                de conversion, desarrollo frontend y automatizaciones conectadas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Correo directo:{" "}
                <a
                  href="mailto:hola@crisnnino.com"
                  className="underline decoration-white/50 underline-offset-4"
                >
                  hola@crisnnino.com
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <GitBranch className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Tambien puedes revisar codigo y experimentos en{" "}
                <Link
                  href="https://github.com/felipenino13"
                  className="underline decoration-white/50 underline-offset-4"
                >
                  github.com/felipenino13
                </Link>
                .
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Si vienes desde reclutamiento o una vacante, puedo compartir
                experiencia, stack y casos relevantes de forma mas puntual.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-950 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
