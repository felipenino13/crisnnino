import Image from "next/image";
import { labItems } from "./content";
import { SectionHeading } from "./SectionHeading";

export function LabSection() {
  return (
    <section id="laboratorio" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Laboratorio"
            title="Uso este sitio tambien como espacio para probar ideas que despues pueden convertirse en soluciones reales."
            description="Aqui entran experimentos de interaccion, storytelling, automatizacion y piezas de captacion que me permiten afinar criterio, velocidad y ejecucion."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {labItems.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
          <Image
            src="/img/lab-experiments-visual.png"
            alt="Visual de laboratorio web con prototipos, pruebas UX, analitica e interfaces experimentales."
            fill
            sizes="(min-width: 1024px) 52vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
