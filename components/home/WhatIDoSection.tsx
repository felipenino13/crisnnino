import { capabilities } from "./content";
import { SectionHeading } from "./SectionHeading";

export function WhatIDoSection() {
  return (
    <section
      id="que-hago"
      className="bg-[radial-gradient(circle_at_20%_0%,rgba(103,232,249,0.13),transparent_34%),linear-gradient(180deg,#08111f_0%,#05060f_100%)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            className="max-w-2xl"
            eyebrow="Qué hago"
            title="Diseño, automatización y ejecución de producto en un solo flujo."
          />
          <p className="max-w-xl text-lg leading-8 text-cyan-100/72">
            Ayudo a equipos, fundadores y empresas a pasar de una idea inicial a
            un producto digital publicado, combinando estrategia, UX, frontend,
            automatización, IA, SEO y growth.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-cyan-300/18 bg-white/[0.045] p-6 shadow-[0_0_42px_rgba(103,232,249,0.08)] backdrop-blur transition hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-fuchsia-300/[0.055] hover:shadow-[0_0_60px_rgba(244,114,182,0.16)]"
            >
              <div className="inline-flex rounded-lg bg-cyan-300/10 p-3 text-cyan-200 ring-1 ring-cyan-300/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="mt-4 text-base leading-7 text-cyan-100/70">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
