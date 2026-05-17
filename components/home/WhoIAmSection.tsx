import Image from "next/image";
import { highlights, whoIAm } from "./content";
import { SectionHeading } from "./SectionHeading";

export function WhoIAmSection() {
  return (
    <section
      id="who-i-am"
      className="bg-[linear-gradient(180deg,#05060f_0%,#08111f_100%)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Who I Am"
            title="A designer-builder focused on turning ideas into digital products."
            description={whoIAm.intro}
          />

          <div className="mt-8 space-y-5 text-lg leading-8 text-cyan-100/72">
            <p>{whoIAm.body}</p>
            <p>{whoIAm.context}</p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-cyan-300/20 bg-cyan-300/5 px-4 py-3 text-sm font-medium text-cyan-50 shadow-[0_0_34px_rgba(103,232,249,0.08)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-fuchsia-300/20 bg-slate-950 shadow-[0_0_80px_rgba(244,114,182,0.18)]">
          <Image
            src="/img/digital-product-creator-visual.png"
            alt="Editorial illustration representing Cristian Nino as a digital product creator working across design, automation, AI, and web products."
            fill
            sizes="(min-width: 1024px) 44vw, 90vw"
            className="object-cover saturate-125"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(5,6,15,0.72)_100%)]" />
        </div>
      </div>
    </section>
  );
}
