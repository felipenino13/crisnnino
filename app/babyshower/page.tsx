import BabyClient from "./BabyClient";
import type { Metadata } from "next";
import { getFirstBotTitle } from "@/lib/db";

const defaultTitle = "Baby Shower Agustin";
const description = "Estas invitado a celebrar este dia tan especial con nosotros.";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const title = (await getFirstBotTitle()) ?? defaultTitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/babyshower",
      images: [
        {
          url: "/img/poster-babyshower.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "es_CO",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/img/poster-babyshower.jpg"],
    },
  };
}

type BabyPageProps = {
  searchParams: Promise<{
    name?: string;
    regalo?: string;
    etapa?: string;
  }>;
};

export default async function Page({ searchParams }: BabyPageProps) {
  const params = await searchParams;
  const title = await getFirstBotTitle();

  const name = params.name || "familia";
  const regalo = params.regalo || "un detalle especial";
  const etapa = params.etapa || "1";

  return <BabyClient title={title} name={name} regalo={regalo} etapa={etapa} />;
}
