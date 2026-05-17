import { faqs } from "./content";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          className="max-w-2xl"
          eyebrow="Preguntas frecuentes"
          title="Respuestas rapidas para facilitar una decision de contacto."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 marker:hidden">
                {item.question}
              </summary>
              <p className="mt-4 text-base leading-7 text-slate-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
