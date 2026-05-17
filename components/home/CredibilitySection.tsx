import { ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function CredibilitySection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Credibilidad"
          title="Prueba social, casos y detalles de implementacion pueden crecer con el portafolio."
          description="Deje una estructura lista para sumar testimonios, resultados y nuevos proyectos sin reescribir la home."
        />

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
            <ShieldCheck className="h-4 w-4" />
            Placeholder listo
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-slate-950">
            Espacio para testimonios y validacion externa
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Puedes sumar aqui testimonios de clientes, lideres de equipo o
            colaboradores, junto con resultados y contexto del proyecto para
            reforzar credibilidad con evidencia concreta.
          </p>
        </article>
      </div>
    </section>
  );
}
