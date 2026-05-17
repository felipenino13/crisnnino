import Image from "next/image";
import { highlights, whoIAm } from "./content";
import { SectionHeading } from "./SectionHeading";

export function WhoIAmSection() {
  return (
    <section id="who-i-am" className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Who I Am"
            title="A designer-builder focused on turning ideas into digital products."
            description={whoIAm.intro}
          />

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
            <p>{whoIAm.body}</p>
            <p>{whoIAm.context}</p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_12px_32px_rgba(15,23,42,0.04)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-900 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
          <Image
            src="/img/digital-product-creator-visual.png"
            alt="Editorial illustration representing Cristian Nino as a digital product creator working across design, automation, AI, and web products."
            fill
            sizes="(min-width: 1024px) 44vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
