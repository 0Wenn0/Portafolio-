import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { HtmlLangSync } from "@/components/HtmlLangSync";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";

const siteUrl = "https://portafolio-wendyrb.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Wendy Ramírez Burgos — Change Management y adopción de IA",
  description:
    "Diseño estrategias de adopción, programas de aprendizaje y experiencias tecnológicas basadas en cómo las personas aprenden, deciden y cambian.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      es: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Wendy Ramírez Burgos — Change Management y adopción de IA",
    description:
      "Neuropsicóloga y científica de datos. Change Management y adopción de IA a escala.",
    url: siteUrl,
    siteName: "Wendy Ramírez Burgos",
    locale: "es_MX",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 627,
        alt: "Wendy Ramírez Burgos — Change Management y adopción de IA",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wendy Ramírez Burgos",
    jobTitle: "Change Management y adopción de IA a escala",
    url: siteUrl,
    email: "mailto:warb91030@gmail.com",
    sameAs: [
      "https://orcid.org/0000-0001-9261-4859",
      "https://linkedin.com/in/wendyRB-ai",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
  };

  return (
    <html lang="es">
      <body>
        <HtmlLangSync />
        <CustomCursor />
        <ScrollRevealInit />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        {children}
      </body>
    </html>
  );
}
