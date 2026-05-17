import { services } from "./content";
import { SectionHeading } from "./SectionHeading";

export function AboutServicesSection() {
  return (
    <section id="servicios" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Sobre mi"
            title="Diseno experiencias web para que el valor del proyecto se entienda rapido y se convierta mejor."
          />
          <div className="space-y-5 text-base leading-8 text-slate-700">
            <p>
              Mi trabajo cruza diseno, contenido, frontend y automatizacion. Eso
              me permite pensar una pagina como sistema completo: que se vea
              bien, cargue rapido, explique con claridad y deje un siguiente paso
              facil de tomar.
            </p>
            <p>
              He trabajado en soluciones para instituciones educativas, salud y
              empresas enfocadas en generacion de leads y optimizacion de
              conversiones. El objetivo no es solo publicar una pagina; es
              construir una experiencia util para negocio y usuario.
            </p>
          </div>
        </div>

        <SectionHeading
          className="mt-20 max-w-2xl"
          eyebrow="Servicios"
          title="Servicios pensados para reclutadores, equipos y clientes que necesitan resolver rapido y bien."
          description="Desde una landing page hasta una automatizacion conectada con tu stack, priorizo claridad, performance y capacidad de conversion."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.1)]"
            >
              <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                {title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
