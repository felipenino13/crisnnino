import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectLinks, projects } from "./content";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="bg-[linear-gradient(180deg,#05060f_0%,#080a18_48%,#05060f_100%)] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            className="max-w-2xl"
            eyebrow="Proyectos"
            title="Productos, experimentos y herramientas que estoy construyendo."
            tone="light"
          />
          <p className="max-w-xl text-base leading-7 text-cyan-100/70">
            Este sitio funciona como hub central para productos en subdominios,
            herramientas privadas y experimentos que pueden convertirse en
            negocios digitales.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectLinks.map((item) => (
            <span
              key={item}
              className="rounded-full border border-lime-300/25 bg-lime-300/10 px-3 py-1 text-xs text-lime-100"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-cyan-300/18 bg-white/[0.045] shadow-[0_0_44px_rgba(103,232,249,0.08)] transition hover:-translate-y-1 hover:border-fuchsia-300/45 hover:bg-fuchsia-300/[0.055] hover:shadow-[0_0_66px_rgba(244,114,182,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Vista previa del proyecto ${project.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,15,0)_22%,rgba(5,6,15,0.78)_100%)]" />
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-normal text-cyan-200/80">
                  {project.category}
                </p>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <span className="shrink-0 rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs text-fuchsia-100">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-cyan-100/70">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  aria-label={`Abrir proyecto ${project.name}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-lime-200"
                >
                  Abrir proyecto
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
