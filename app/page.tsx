import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { siteUrl } from "@/components/home/content";

export const metadata: Metadata = {
  title: "Cristian Nino | UX/UI, CRO y desarrollo frontend para sitios que convierten",
  description:
    "UX/UI Designer y frontend especializado en landing pages, CRO, SEO, automatizacion y experiencias web para generar leads, oportunidades y contacto real.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cristian Nino | UX/UI, CRO y desarrollo frontend para sitios que convierten",
    description:
      "Portafolio profesional de Cristian Nino. Diseno experiencias web, landing pages y automatizaciones orientadas a conversion.",
    url: siteUrl,
    siteName: "Cris Nino",
    images: ["/opengraph-image"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Nino | UX/UI, CRO y desarrollo frontend",
    description:
      "Portafolio profesional con proyectos, servicios y contacto para oportunidades laborales y freelance.",
    images: ["/twitter-image"],
  },
  keywords: [
    "UX UI Designer",
    "frontend developer Colombia",
    "landing pages",
    "CRO",
    "SEO",
    "automatizacion n8n",
    "Next.js",
    "consultor frontend",
  ],
};

export default function Home() {
  return <HomePage />;
}
