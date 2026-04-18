import BabyClient from "./BabyClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baby Shower Agustín 🐣",
  description: "Estás invitado a celebrar este día tan especial con nosotros 💛",
  openGraph: {
    title: "Baby Shower Agustín 🐣",
    description: "Estás invitado a celebrar este día tan especial con nosotros 💛",
    url: "/babyshower",
    images: [
      {
        url: "/img/poster-babyshower.jpg",
        width: 1200,
        height: 630,
        alt: "Invitación Baby Shower Agustín",
      },
    ],
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baby Shower Agustín 🐣",
    description: "Estás invitado a celebrar este día tan especial con nosotros 💛",
    images: ["/img/poster-babyshower.jpg"],
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