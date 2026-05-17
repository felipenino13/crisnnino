import Script from "next/script";
import { AboutServicesSection } from "./AboutServicesSection";
import { ContactSection } from "./ContactSection";
import { CredibilitySection } from "./CredibilitySection";
import { FaqSection } from "./FaqSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { LabSection } from "./LabSection";
import { ProcessSection } from "./ProcessSection";
import { ProjectsSection } from "./ProjectsSection";
import { StackSection } from "./StackSection";
import { faqs, siteUrl } from "./content";

export function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Cristian Nino",
        alternateName: "Cris Nino",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        sameAs: ["https://github.com/felipenino13"],
        jobTitle: "UX/UI Designer y Frontend Developer",
        knowsAbout: [
          "UX/UI",
          "Landing pages",
          "CRO",
          "SEO tecnico",
          "Next.js",
          "React",
          "n8n",
          "Automatizacion",
        ],
      },
      {
        "@type": "ProfessionalService",
        name: "Cristian Nino",
        url: siteUrl,
        areaServed: "Latam",
        description:
          "Servicios de UX/UI, desarrollo frontend, landing pages, CRO, SEO y automatizacion orientados a conversion.",
        provider: {
          "@type": "Person",
          name: "Cristian Nino",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="overflow-hidden bg-[#f7f1e8] text-slate-950">
        <HeroSection />
        <AboutServicesSection />
        <ProjectsSection />
        <LabSection />
        <StackSection />
        <ProcessSection />
        <CredibilitySection />
        <FaqSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
