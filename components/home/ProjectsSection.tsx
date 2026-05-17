import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "./content";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            className="max-w-2xl"
            eyebrow="Proyectos destacados"
            title="Trabajo real, piezas funcionales y sistemas pensados para comunicar, validar y convertir."
            tone="light"
          />
          <p className="max-w-xl text-base leading-7 text-slate-300">
            No busco inflar el portafolio. Prefiero mostrar proyectos que dejan
            ver criterio, implementacion y tipo de problema resuelto.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_25%,rgba(15,23,42,0.56)_100%)]" />
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                  {project.label}
                </p>
                <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {project.description}
                </p>
                <p className="mt-5 text-sm leading-6 text-slate-400">
                  {project.outcome}
                </p>
                <Link
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition hover:text-amber-100"
                >
                  Ver proyecto
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
