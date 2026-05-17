import Link from "next/link";
import { BriefcaseBusiness, FileText, GitBranch, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-lg bg-neutral-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
          <p className="text-sm font-semibold uppercase tracking-normal text-amber-200/80">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Whether you need a new website, automation, or a complete digital
            product, I&apos;d love to help.
          </p>

          <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
            <div className="flex items-start gap-3">
              <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Ideal conversations: product ideas, web platforms, MVPs,
                AI-powered workflows, landing systems, automation, and growth.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 shrink-0" />
              <p>
                Direct email:{" "}
                <a
                  href="mailto:hola@crisnnino.com"
                  className="underline decoration-white/50 underline-offset-4"
                >
                  hola@crisnnino.com
                </a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <GitBranch className="mt-1 h-5 w-5 shrink-0" />
              <p>
                You can also review code and experiments at{" "}
                <Link
                  href="https://github.com/felipenino13"
                  className="underline decoration-white/50 underline-offset-4"
                >
                  github.com/felipenino13
                </Link>
                .
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="mt-1 h-5 w-5 shrink-0" />
              <p>
                If you are hiring, I can share experience, stack details, and
                relevant product work in a more focused format.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-slate-950 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)] sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
