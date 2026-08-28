import { Clock3, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";

export function ContactHours() {
  return (
    <section className="bg-off-white py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Canais de atendimento</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl leading-[0.94] tracking-[-0.04em] md:text-6xl">
              Estamos disponíveis para ouvir você.
            </h2>
            <div className="mt-10 flex gap-4 border-t border-ink/15 pt-6">
              <Clock3 size={21} className="mt-1 shrink-0 text-gold-deep" aria-hidden="true" />
              <div className="w-full max-w-sm space-y-3 text-sm">
                {siteConfig.hours.map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between gap-4 ${item.closed ? "text-ink/40" : "text-ink/75"}`}
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
            <a
              href={siteConfig.phoneHref}
              className="contact-card group bg-off-white p-7 transition-colors hover:bg-ink hover:text-off-white"
            >
              <Phone
                size={20}
                className="text-gold-deep group-hover:text-gold"
                aria-hidden="true"
              />
              <span className="mt-12 block text-xs uppercase tracking-[0.14em] text-ink/45 group-hover:text-off-white/45">
                Telefone
              </span>
              <span className="mt-2 block text-sm">{siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card group bg-off-white p-7 transition-colors hover:bg-ink hover:text-off-white"
            >
              <MessageCircle
                size={20}
                className="text-gold-deep group-hover:text-gold"
                aria-hidden="true"
              />
              <span className="mt-12 block text-xs uppercase tracking-[0.14em] text-ink/45 group-hover:text-off-white/45">
                WhatsApp
              </span>
              <span className="mt-2 block text-sm">{siteConfig.whatsapp}</span>
            </a>
            <a
              href={siteConfig.emailHref}
              className="contact-card group bg-off-white p-7 transition-colors hover:bg-ink hover:text-off-white"
            >
              <Mail size={20} className="text-gold-deep group-hover:text-gold" aria-hidden="true" />
              <span className="mt-12 block text-xs uppercase tracking-[0.14em] text-ink/45 group-hover:text-off-white/45">
                E-mail
              </span>
              <span className="mt-2 block break-all text-sm">{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar o Instagram da RCD Advocacia"
              className="contact-card group bg-off-white p-7 transition-colors hover:bg-ink hover:text-off-white"
            >
              <Instagram
                size={20}
                className="text-gold-deep group-hover:text-gold"
                aria-hidden="true"
              />
              <span className="mt-12 block text-xs uppercase tracking-[0.14em] text-ink/45 group-hover:text-off-white/45">
                Instagram
              </span>
              <span className="mt-2 block text-sm">@rcd_advocacia</span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
