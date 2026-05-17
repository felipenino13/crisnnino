import Image from "next/image";
import { highlights, profile } from "./content";
import { SectionHeading } from "./SectionHeading";

export function WhoIAmSection() {
  return (
    <section
      id="perfil"
      className="bg-[linear-gradient(180deg,#05060f_0%,#08111f_100%)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Perfil"
            title="Perfil de creador: diseño, tecnología y productos digitales."
            description={profile.intro}
          />

          <div className="mt-8 space-y-5 text-lg leading-8 text-cyan-100/72">
            <p>{profile.body}</p>
            <p>{profile.context}</p>
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

        <div className="relative mx-auto aspect-square w-full max-w-[440px] overflow-hidden rounded-full border border-cyan-300/35 bg-slate-950 p-2 shadow-[0_0_90px_rgba(103,232,249,0.2)]">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src="/img/cristian-nino-profile.png"
              alt="Foto de perfil de Cristian Niño en su estudio de trabajo."
              fill
              sizes="(min-width: 1024px) 38vw, 82vw"
              className="object-cover object-center"
              priority={false}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,15,0)_55%,rgba(5,6,15,0.58)_100%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
