import Image from "next/image";
import { processSteps } from "./content";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="proceso" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Proceso de trabajo"
            title="Claridad primero. Complejidad solo cuando hace falta."
            description="Si una empresa o reclutador llega aqui, deberia entender rapido que puede esperar del proceso, del entregable y del criterio de trabajo."
          />

          <div className="mt-8 space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 font-semibold text-slate-950">
                  0{index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
          <Image
            src="/img/process-workflow-visual.png"
            alt="Visual de proceso UX y frontend con discovery, diseno, implementacion, automatizacion y medicion."
            fill
            sizes="(min-width: 1024px) 54vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
