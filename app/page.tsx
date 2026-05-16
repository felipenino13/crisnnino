import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  GitBranch,
  Globe,
  MessageCircleMore,
  Workflow,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { TypingTitle } from "@/components/TypingTitle";

const siteUrl = "https://www.crisnnino.com";

const services = [
  {
    title: "Sitios y landing pages",
    description:
      "Paginas rapidas, claras y orientadas a conversion para marcas personales, campanas y negocios.",
    icon: Globe,
  },
  {
    title: "Automatizacion con n8n",
    description:
      "Formularios, webhooks y flujos que reducen tareas manuales y conectan herramientas reales.",
    icon: Workflow,
  },
  {
    title: "Experiencias web a medida",
    description:
      "Micrositios, invitaciones interactivas, prototipos y productos web que mezclan diseno, logica y narrativa.",
    icon: Bot,
  },
];

const projects = [
  {
    title: "Baby Shower interactivo",
    href: "/babyshower",
    label: "Experiencia publicada",
    description:
      "Una landing inmersiva con video, confirmacion de asistencia y automatizacion conectada por webhook.",
  },
  {
    title: "Portafolio + laboratorio",
    href: "#contacto",
    label: "En evolucion",
    description:
      "Este sitio funciona como carta de presentacion, canal de contacto y espacio para probar ideas web con rapidez.",
  },
];

const process = [
  "Aterrizo la idea y defino la accion principal que debe lograr la pagina.",
  "Diseno una estructura simple para comunicar valor sin ruido innecesario.",
  "Construyo y conecto formularios, automatizaciones o componentes interactivos.",
  "Optimizo velocidad, SEO tecnico y puntos de contacto para convertir visitas en conversaciones.",
];

export const metadata: Metadata = {
  title: "Cris Nino | Desarrollo web, automatizacion y experiencias digitales",
  description:
    "Portafolio personal de Cris Nino. Desarrollo sitios web, landing pages y automatizaciones para proyectos que necesitan presencia digital clara y contacto directo.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cris Nino | Desarrollo web, automatizacion y experiencias digitales",
    description:
      "Sitios web, experimentos digitales y automatizaciones orientadas a visibilidad, contacto y trabajo real.",
    url: siteUrl,
    siteName: "Cris Nino",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cris Nino | Desarrollo web y automatizacion",
    description:
      "Portafolio, experimentacion y contacto para proyectos web con enfoque practico.",
  },
  keywords: [
    "portafolio desarrollador web",
    "desarrollo web Colombia",
    "landing pages",
    "automatizacion n8n",
    "Next.js portfolio",
    "experiencias digitales",
  ],
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cris Nino",
    url: siteUrl,
    sameAs: ["https://github.com/felipenino13"],
    jobTitle: "Desarrollador web y automatizacion",
    knowsAbout: [
      "Desarrollo web",
      "Landing pages",
      "Next.js",
      "Automatizacion con n8n",
      "Experiencias digitales",
    ],
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%),linear-gradient(180deg,_#101828_0%,_#0b1220_35%,_#f4efe6_35%,_#f4efe6_100%)] text-slate-950">
        <section className="px-6 pb-20 pt-8 text-stone-100 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <header className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-200/80">
                  Cris Nino
                </p>
                <p className="mt-2 max-w-xl text-sm text-slate-300">
                  Desarrollo web, automatizacion y experimentos digitales pensados
                  para generar conversacion y oportunidades de trabajo.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="https://github.com/felipenino13"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-slate-100 transition hover:border-amber-200/60 hover:text-amber-100"
                >
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </Link>
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 font-medium text-slate-950 transition hover:bg-amber-200"
                >
                  Hablemos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </header>

            <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <div className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                  Disponible para colaboraciones, productos y landing pages
                </div>
                <div className="mt-8 text-balance">
                  <TypingTitle text="Construyo sitios y automatizaciones que convierten ideas en experiencias claras." />
                </div>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                  Este portafolio es mi base publica: aqui muestro proyectos,
                  pruebo formatos y dejo una puerta abierta para que personas,
                  marcas o equipos me contacten cuando necesitan construir algo
                  util en la web.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="#proyectos"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-950 transition hover:bg-slate-200"
                  >
                    Ver trabajo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/40"
                  >
                    Escribir ahora
                    <MessageCircleMore className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                  Perfil
                </p>
                <div className="mt-6 space-y-5 text-sm leading-7 text-slate-200">
                  <p>
                    Trabajo con foco en presencia digital, automatizacion y piezas
                    web que deben comunicar rapido y funcionar de verdad.
                  </p>
                  <p>
                    Me interesa combinar frontend, formularios, webhooks y
                    narrativa visual para que un sitio no sea solo bonito: tambien
                    tenga un objetivo claro.
                  </p>
                  <p className="text-slate-300">
                    Ideal para proyectos personales, campanas, prototipos,
                    invitaciones interactivas y negocios que necesitan una pagina
                    bien resuelta para empezar conversaciones.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Que hago
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-5xl">
                Un portafolio efectivo no solo muestra piezas: tambien deja claro
                como puedes ayudar.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Por eso la home ahora esta estructurada alrededor de oferta,
                evidencia y contacto, que es el patron mas consistente en
                portafolios que logran convertir visitas en mensajes reales.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">
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

        <section
          id="proyectos"
          className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200/70">
                  Proyectos
                </p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
                  Trabajo real, experimentos y formatos construidos para probar
                  ideas con rapidez.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                Un buen portafolio no necesita decenas de piezas. Necesita mostrar
                criterio, contexto y la clase de problemas que puedes resolver.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-200/70">
                    {project.label}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <Link
                    href={project.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-200 transition hover:text-amber-100"
                  >
                    Abrir proyecto
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                Como trabajo
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-5xl">
                Claridad primero, complejidad solo cuando hace falta.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Si alguien llega aqui para contratar, debe entender rapido que
                puede esperar del proceso y por que vale la pena escribir.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-300 font-semibold text-slate-950">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-6 pb-24 pt-6 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[2rem] bg-[#cf5c36] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-100/80">
                Contacto
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Si tienes una idea, una pagina por construir o un flujo por
                automatizar, conversemos.
              </h2>
              <p className="mt-5 text-base leading-7 text-orange-50/90">
                Este sitio esta pensado para eso: mostrar como trabajo y dejar un
                camino corto para iniciar una colaboracion.
              </p>

              <div className="mt-8 space-y-4 text-sm leading-7 text-orange-50/90">
                <div className="flex items-start gap-3">
                  <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    Proyectos ideales: portafolios, landing pages, micrositios,
                    formularios inteligentes y automatizaciones conectadas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <GitBranch className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    Tambien puedes revisar codigo y experimentos en{" "}
                    <Link
                      href="https://github.com/felipenino13"
                      className="underline decoration-white/50 underline-offset-4"
                    >
                      github.com/felipenino13
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-950 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
