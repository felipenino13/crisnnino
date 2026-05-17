import { Geist_Mono, Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crisnnino.com"),
  title: {
    default: "Cristian Nino | UX/UI, CRO, automatizacion y desarrollo frontend",
    template: "%s | Cris Nino",
  },
  description:
    "Portafolio profesional de Cristian Nino. UX/UI, landing pages, CRO, SEO, automatizacion y desarrollo frontend para convertir visitas en oportunidades.",
  applicationName: "Cris Nino",
  category: "technology",
  authors: [{ name: "Cris Nino", url: "https://www.crisnnino.com" }],
  creator: "Cris Nino",
  publisher: "Cris Nino",
  keywords: [
    "Cristian Nino",
    "UX UI Designer Colombia",
    "desarrollo frontend",
    "landing pages",
    "CRO",
    "automatizacion n8n",
    "Next.js portfolio",
    "SEO tecnico",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cristian Nino | UX/UI, CRO, automatizacion y desarrollo frontend",
    description:
      "Diseno experiencias web y landing pages orientadas a conversion para equipos, empresas y proyectos digitales.",
    url: "https://www.crisnnino.com",
    siteName: "Cris Nino",
    images: ["/opengraph-image"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Nino | UX/UI, CRO y desarrollo frontend",
    description:
      "Portafolio profesional para reclutadores, clientes y equipos que buscan diseno web con foco en resultados.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
