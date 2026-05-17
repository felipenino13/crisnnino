import { stack } from "./content";
import { SectionHeading } from "./SectionHeading";

export function StackSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            className="max-w-2xl"
            eyebrow="Stack"
            title="Herramientas y tecnologias que uso para disenar, construir, medir y mejorar."
          />
          <p className="max-w-xl text-base leading-7 text-slate-700">
            Selecciono stack segun objetivo, mantenimiento y velocidad de
            ejecucion, no por moda.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
