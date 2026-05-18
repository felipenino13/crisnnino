import { BriefcaseBusiness, FileText, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="bg-[radial-gradient(circle_at_80%_0%,rgba(244,114,182,0.16),transparent_32%),linear-gradient(180deg,#05060f_0%,#08111f_100%)] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-lg border border-fuchsia-300/22 bg-white/[0.045] p-8 text-white shadow-[0_0_64px_rgba(244,114,182,0.12)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-normal text-fuchsia-200">
            Contacto
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Construyamos algo grande
          </h2>
          <p className="mt-5 text-base leading-7 text-cyan-100/72">
            Si necesitas un sitio web, una automatización o un producto digital
            completo, puedo ayudarte a llevarlo de idea a lanzamiento.
          </p>

          <div className="mt-8 space-y-4 text-sm leading-7 text-cyan-100/72">
            <div className="flex items-start gap-3">
              <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Conversaciones ideales: productos digitales, plataformas web,
                MVPs, flujos con IA, landing systems, automatización y growth.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Email directo:{" "}
                <a
                  href="mailto:cristianfelipenino@gmail.com"
                  className="underline decoration-white/50 underline-offset-4"
                >
                  cristianfelipenino@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Si estás contratando, puedo compartir experiencia, stack y
                proyectos relevantes en un formato más puntual.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-cyan-300/18 bg-[#05060f] p-6 shadow-[0_0_70px_rgba(103,232,249,0.12)] sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
