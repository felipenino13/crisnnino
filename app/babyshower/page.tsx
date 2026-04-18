import BabyClient from "./BabyClient";

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