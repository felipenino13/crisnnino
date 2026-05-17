import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectLinks, projects } from "./content";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-neutral-950 px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            className="max-w-2xl"
            eyebrow="Projects"
            title="A collection of products, experiments, and tools I am building."
            tone="light"
          />
          <p className="max-w-xl text-base leading-7 text-slate-300">
            This website is the central hub for current products, private
            experiments, and future subdomains as they move from concept to live
            businesses.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectLinks.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/[0.08]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.name} project visual`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_25%,rgba(15,23,42,0.56)_100%)]" />
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-normal text-amber-200/70">
                  {project.category}
                </p>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {project.description}
                </p>
                <Link
                  href={project.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition hover:text-amber-100"
                >
                  Open project
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
