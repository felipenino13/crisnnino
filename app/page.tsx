import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-20 px-16 bg-white dark:bg-black sm:items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-30 text-center sm:items-start sm:text-left">
          <div className="grid gap-8 m-auto">
            <p>֎ crisnnino</p>
            <div className="space-y-5">
              <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Soluciones web modernas y automatizaciones inteligentes.
              </h1>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Ayudo a empresas y emprendedores a crear sitios web rápidos, escalables y optimizados para conversión.
              </p>
            </div>
              <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
                href="https://www.behance.net/dgneuta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portafolio
              </a>
          </div>
          <div className="space-y-5 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-6 shadow-sm">
            <ContactForm />
          </div>

        </div>
          
      </main>
    </div>
  );
}
