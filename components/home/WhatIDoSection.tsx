import { capabilities } from "./content";
import { SectionHeading } from "./SectionHeading";

export function WhatIDoSection() {
  return (
    <section id="what-i-do" className="bg-white px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            className="max-w-2xl"
            eyebrow="What I Do"
            title="Design, automation, and product execution under one roof."
          />
          <p className="max-w-xl text-lg leading-8 text-slate-700">
            I help teams and founders move from raw idea to shipped digital
            product, combining strategy, UX, frontend development, automation,
            AI, SEO, and growth thinking.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_70px_rgba(15,23,42,0.09)]"
            >
              <div className="inline-flex rounded-lg bg-slate-950 p-3 text-amber-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">
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
