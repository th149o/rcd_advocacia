import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { About } from "@/sections/about";
import { Approach } from "@/sections/approach";
import { Audiences } from "@/sections/audiences";
import { Contact } from "@/sections/contact";
import { ContactHours } from "@/sections/contact-hours";
import { Differentials } from "@/sections/differentials";
import { FAQ } from "@/sections/faq";
import { FinalCta } from "@/sections/final-cta";
import { Footer } from "@/sections/footer";
import { Hero } from "@/sections/hero";
import { Location } from "@/sections/location";
import { PracticeAreas } from "@/sections/practice-areas";
import { Team } from "@/sections/team";

function LegalServiceSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "RCD Advocacia",
    description: "Advocacia e assessoria jurídica para pessoas e empresas.",
    url: siteUrl,
    telephone: "+552424830015",
    email: "secretaria@rcdadvogadosmp.com.br",
    areaServed: "Miguel Pereira e região",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Prefeito Manoel Guilherme Barbosa",
      addressLocality: "Miguel Pereira",
      addressRegion: "RJ",
      postalCode: "26900-000",
      addressCountry: "BR",
    },
    sameAs: ["https://www.instagram.com/rcd_advocacia/"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SectionDivider({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <div className={`section-divider ${dark ? "section-divider-dark" : ""}`}>{children}</div>;
}

export default function Home() {
  return (
    <>
      <LegalServiceSchema />
      <SiteHeader />
      <main>
        <Hero />
        <SectionDivider>
          <About />
        </SectionDivider>
        <SectionDivider dark>
          <PracticeAreas />
        </SectionDivider>
        <SectionDivider>
          <Differentials />
        </SectionDivider>
        <SectionDivider>
          <Approach />
        </SectionDivider>
        <SectionDivider>
          <Team />
        </SectionDivider>
        <SectionDivider dark>
          <Audiences />
        </SectionDivider>
        <SectionDivider dark>
          <Contact />
        </SectionDivider>
        <SectionDivider>
          <FAQ />
        </SectionDivider>
        <SectionDivider>
          <Location />
        </SectionDivider>
        <SectionDivider>
          <ContactHours />
        </SectionDivider>
        <SectionDivider dark>
          <FinalCta />
        </SectionDivider>
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
