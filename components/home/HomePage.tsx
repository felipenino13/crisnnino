import Script from "next/script";
import { ContactSection } from "./ContactSection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { WhatIDoSection } from "./WhatIDoSection";
import { WhoIAmSection } from "./WhoIAmSection";
import { schemaKeywords, siteUrl } from "./content";

export function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Cristian Niño",
        alternateName: "Cris Nino",
        url: siteUrl,
        image: `${siteUrl}/opengraph-image`,
        sameAs: ["https://github.com/felipenino13"],
        jobTitle: "UX/UI Designer, Automation Builder and Digital Product Creator",
        knowsAbout: schemaKeywords,
      },
      {
        "@type": "WebSite",
        name: "Cristian Niño",
        url: siteUrl,
        description:
          "Personal innovation hub for digital products, automations, and scalable business ideas.",
      },
      {
        "@type": "Organization",
        name: "Cris Nino",
        url: siteUrl,
        founder: {
          "@type": "Person",
          name: "Cristian Niño",
        },
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

      <main className="overflow-hidden bg-[#05060f] text-cyan-50">
        <HeroSection />
        <WhoIAmSection />
        <WhatIDoSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
