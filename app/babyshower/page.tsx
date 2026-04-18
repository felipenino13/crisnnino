import BabyClient from "./BabyClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Shower Agustín 🐣",
  description: "Estás invitado a celebrar este día tan especial con nosotros 💛",

  openGraph: {
    title: "Baby Shower Agustín 🐣",
    description: "Estás invitado a celebrar este día tan especial con nosotros 💛",
    url: "https://crisnnino.com/babyshower",
    siteName: "Baby Shower Agustín",
    images: [
      {
        url: "https://crisnnino.com/img/poster-babyshower.jpg",
        width: 1200,
        height: 630,
        alt: "Invitación Baby Shower Agustín",
      },
    ],
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Baby Shower Agustín 🐣",
    description: "Estás invitado a celebrar este día tan especial con nosotros 💛",
    images: ["https://crisnnino.com/img/poster-babyshower.jpg"],
  },
};

type BabyPageProps = {
  searchParams: Promise<{
    name?: string;
    regalo?: string;
    etapa?: string;
  }>;
};

export default async function Page({ searchParams }: BabyPageProps) {
  const params = await searchParams;

  const name = params.name || "familia";
  const regalo = params.regalo || "un detalle especial";
  const etapa = params.etapa || "1";

  return <BabyClient name={name} regalo={regalo} etapa={etapa} />;
}