import { getFirstBotTitle } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const title = await getFirstBotTitle();

  return (
    <>
      <h1>{title ?? "No se pudo cargar el titulo"}</h1>
    </>
  );
}
