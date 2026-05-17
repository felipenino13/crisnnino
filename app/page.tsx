import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { siteUrl } from "@/components/home/content";

export const metadata: Metadata = {
  title: "Cristian Niño | UX/UI Designer, Automation Builder & Digital Product Creator",
  description:
    "I design, automate, and launch digital products that help businesses grow and ideas become reality.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cristian Niño | UX/UI Designer, Automation Builder & Digital Product Creator",
    description:
      "I design, automate, and launch digital products that help businesses grow and ideas become reality.",
    url: siteUrl,
    siteName: "Cris Nino",
    images: ["/opengraph-image"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Niño | Digital Product Creator",
    description:
      "UX/UI, automation, AI, web products, and scalable digital business ideas.",
    images: ["/twitter-image"],
  },
  keywords: [
    "UX/UI Designer Colombia",
    "Digital Product Creator",
    "Automation Builder",
    "Next.js Developer",
    "n8n Automation Expert",
  ],
};

export default function Home() {
  return <HomePage />;
}
