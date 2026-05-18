import type { Metadata } from "next";
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

const defaultTitle =
  "Cristian Niño | UX/UI Designer, Automation Builder y Digital Product Creator";
const defaultDescription =
  "Diseño, automatizo y lanzo productos digitales que convierten ideas en soluciones escalables.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.crisnnino.com"),
  title: {
    default: defaultTitle,
    template: "%s | Cris Niño",
  },
  description: defaultDescription,
  applicationName: "Cris Niño",
  category: "technology",
  authors: [{ name: "Cris Niño", url: "https://www.crisnnino.com" }],
  creator: "Cris Niño",
  publisher: "Cris Niño",
  keywords: [
    "Cristian Niño",
    "UX UI Designer Colombia",
    "Digital Product Creator",
    "Automation Builder",
    "AI Builder",
    "Next.js Developer",
    "n8n Automation Expert",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "https://www.crisnnino.com",
    siteName: "Cris Niño",
    images: ["/opengraph-image"],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Niño | Digital Product Creator",
    description:
      "UX/UI, automatización, IA, productos web e ideas de negocio escalables.",
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
