import { getFirstBotTitle } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const title = await getFirstBotTitle();

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
          Cris Nino
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-tight sm:text-7xl">
          {title ?? "Home limpio"}
        </h1>
      </section>
    </main>
  );
}
