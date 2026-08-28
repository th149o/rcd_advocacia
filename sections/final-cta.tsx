import { ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="bg-ink py-24 text-off-white md:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Próximo passo</p>
            <h2 className="mt-5 max-w-3xl font-display text-6xl leading-[0.88] tracking-[-0.05em] md:text-8xl">
              Precisa de orientação jurídica?
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-off-white/65">
              Entre em contato com a RCD Advocacia e converse com nossa equipe sobre sua
              necessidade.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row md:flex-col">
            <ButtonLink
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
            >
              Fale conosco pelo WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={siteConfig.phoneHref} variant="outline">
              <Phone size={16} aria-hidden="true" /> Ligar para o escritório
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
