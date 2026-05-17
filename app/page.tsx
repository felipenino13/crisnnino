import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { siteUrl } from "@/components/home/content";

export const metadata: Metadata = {
  title: "Cristian Niño | UX/UI Designer, Automation Builder y Digital Product Creator",
  description:
    "Diseño, automatizo y lanzo productos digitales que ayudan a las empresas a crecer y a convertir ideas en realidad.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cristian Niño | UX/UI Designer, Automation Builder y Digital Product Creator",
    description:
      "Diseño, automatizo y lanzo productos digitales que ayudan a las empresas a crecer y a convertir ideas en realidad.",
    url: siteUrl,
    siteName: "Cris Niño",
    images: ["/opengraph-image"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Niño | Digital Product Creator",
    description:
      "UX/UI, automatización, IA, productos web e ideas de negocio escalables.",
    images: ["/twitter-image"],
  },
  keywords: [
    "UX/UI Designer Colombia",
    "Creador de productos digitales",
    "Automation Builder",
    "Next.js Developer",
    "Experto en automatización n8n",
  ],
};

export default function Home() {
  return <HomePage />;
}
