import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { imageAssets } from "@/constants/images";
import { siteConfig } from "@/constants/site";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";

const contactItems = [
  ["Telefone", siteConfig.phone, siteConfig.phoneHref, Phone],
  ["WhatsApp", siteConfig.whatsapp, siteConfig.whatsappHref, MessageCircle],
  ["E-mail", siteConfig.email, siteConfig.emailHref, Mail],
] as const;

export function Contact() {
  return (
    <section id="contato" className="bg-ink py-24 text-off-white md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Entre em contato"
              title={<>Vamos conversar sobre o que você precisa.</>}
              description="Escolha o canal mais conveniente. Nossa equipe está preparada para receber sua mensagem e entender o seu momento."
            />
            <div className="mt-12 space-y-6">
              {contactItems.map(([label, value, href, Icon]) => (
                <a
                  key={label}
                  href={href}
                  target={label === "WhatsApp" ? "_blank" : undefined}
                  rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 text-sm text-off-white/75 transition-colors hover:text-gold"
                >
                  <span className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-gold/35 text-gold">
                    <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-off-white/40">
                      {label}
                    </span>
                    <span className="mt-1 block">{value}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="ml-auto opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal
            delay={0.1}
            className="overflow-hidden rounded-editorial border border-off-white/15 bg-off-white/5"
          >
            <div className="relative h-44">
              <Image
                src={imageAssets.office}
                alt="Ambiente reservado para atendimento profissional"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-ink/10" />
              <p className="absolute bottom-5 left-7 text-xs uppercase tracking-[0.16em] text-off-white/65 md:left-10">
                Atendimento com atenção aos detalhes
              </p>
            </div>
            <div className="p-7 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
