import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check, MapPin } from "lucide-react";
import { imageAssets } from "@/constants/images";
import { siteConfig } from "@/constants/site";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink text-off-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageAssets.hero}
          alt="Arquitetura institucional abstrata"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/35" />
      </div>
      <Container className="relative flex min-h-[760px] items-end pb-20 pt-40 md:min-h-[860px] md:pb-28">
        <div className="grid w-full gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <AnimatedGroup delay={0.12}>
            <div className="max-w-3xl">
              <p className="eyebrow dark-eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-gold" /> RCD Advocacia
              </p>
              <h1 className="mt-7 max-w-3xl font-display text-[clamp(3.45rem,8vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-off-white">
                Seriedade para orientar. Estratégia para decidir.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-off-white/72 md:text-xl">
                A RCD Advocacia oferece orientação e assessoria jurídica para pessoas e empresas,
                com atendimento responsável e atuação guiada pelas necessidades de cada caso.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale com um Advogado <ArrowUpRight size={17} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="#contato" variant="outline">
                  Entre em Contato
                </ButtonLink>
              </div>
            </div>
          </AnimatedGroup>

          <AnimatedGroup delay={0.35} className="lg:justify-self-end">
            <div className="max-w-sm border-l border-gold/50 pl-6 md:pl-8">
              <p className="text-sm leading-7 text-off-white/70">
                Atuação jurídica próxima, clara e personalizada para situações que exigem atenção.
              </p>
              <ul className="mt-7 space-y-4 text-sm text-off-white/90">
                {[
                  "Atendimento em Miguel Pereira/RJ",
                  "Pessoas físicas e empresas",
                  "Consultoria e assessoria jurídica",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={16} className="shrink-0 text-gold" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-off-white/55">
                <MapPin size={15} className="text-gold" aria-hidden="true" /> {siteConfig.city}
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </Container>
      <a
        href="#escritorio"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-off-white/55 transition-colors hover:text-gold md:flex"
      >
        Explorar <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
