import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { siteUrl } from "@/components/home/content";

const homepageTitle =
  "Cristian Niño | UX/UI Designer, Automation Builder y Digital Product Creator";
const homepageDescription =
  "Diseño, automatizo y lanzo productos digitales que convierten ideas en soluciones escalables para crecer, vender mejor y lanzar más rápido.";

export const metadata: Metadata = {
  title: homepageTitle,
  description: homepageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: homepageTitle,
    description: homepageDescription,
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
      "UX/UI, automatización, IA, productos web y sistemas escalables.",
    images: ["/twitter-image"],
  },
  keywords: [
    "UX/UI Designer Colombia",
    "Digital Product Creator",
    "Automation Builder",
    "AI Builder",
    "Next.js Developer",
    "n8n Automation Expert",
    "Product Designer",
  ],
};

export default function Home() {
  return <HomePage />;
}
