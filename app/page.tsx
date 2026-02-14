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
            
          
          {/* Contact Form */}
            <form
            action="mailto:info@crisnnino.com"
            method="post"
            encType="text/plain"
            >
            <div className="text-center">
              <h1 className="text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Hablemos de tu proyecto
              </h1>
              <p className="text-md leading-6 text-zinc-600 dark:text-zinc-400">
                Cuéntame qué necesitas y te respondo lo antes posible.
              </p>
            </div>
            

            {/* Nombre */}
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-neutral-200">
                Nombre
                </label>
                <input
                id="name"
                name="Nombre"
                type="text"
                autoComplete="name"
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
                required
                />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-neutral-200">
                Email
                </label>
                <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
                required
                />
            </div>

            {/* Teléfono */}
            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm text-neutral-200">
                Número de celular
                </label>
                <input
                id="phone"
                name="Celular"
                type="tel"
                autoComplete="tel"
                placeholder="+57 300 000 0000"
                className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
                />
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-neutral-200">
                Mensaje
                </label>
                <textarea
                id="message"
                name="Mensaje"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                className="w-full resize-none rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-neutral-100 placeholder:text-neutral-500 outline-none focus:border-neutral-600"
                required
                />
            </div>

            {/* Botón */}
            <div className="pt-2">
                <button
                type="submit"
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90 transition"
                >
                Enviar mensaje
                </button>
            </div>
            </form>
          </div>

        </div>
          
      </main>
    </div>
  );
}
