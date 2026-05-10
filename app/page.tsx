import { unstable_noStore as noStore } from "next/cache";

import { TypingTitle } from "@/components/TypingTitle";
import { getLatestBotContent } from "@/lib/db";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  noStore();

  const { title, backgroundBody } = await getLatestBotContent();

  return (
    <main
      className="min-h-screen bg-white text-neutral-950"
      style={backgroundBody ? { backgroundColor: backgroundBody } : undefined}
    >
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
          Cris Nino
        </p>
        <TypingTitle text={title ?? "Home limpio"} />
      </section>
    </main>
  );
}
