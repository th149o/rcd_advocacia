import { ArrowUpRight, Building2, UserRound } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Audiences() {
  return (
    <section className="bg-ink py-24 text-off-white md:py-32">
      <Container>
        <div className="grid gap-px border border-off-white/15 bg-off-white/15 md:grid-cols-2">
          <AnimatedGroup className="bg-ink p-8 md:p-12 lg:p-16" delay={0.08}>
            <UserRound size={28} className="text-gold" strokeWidth={1.3} aria-hidden="true" />
            <p className="mt-20 text-xs font-bold uppercase tracking-[0.17em] text-gold">
              Para pessoas
            </p>
            <h2 className="mt-5 max-w-md font-display text-5xl leading-[0.92] tracking-[-0.04em]">
              Orientação para situações que fazem parte da sua vida.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-off-white/60">
              Orientação jurídica para diferentes situações e necessidades do cotidiano.
            </p>
            <ButtonLink href="#contato" variant="outline" className="mt-9">
              Falar sobre minha situação <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </AnimatedGroup>
          <AnimatedGroup delay={0.2} className="bg-off-white p-8 text-ink md:p-12 lg:p-16">
            <Building2 size={28} className="text-ink" strokeWidth={1.3} aria-hidden="true" />
            <p className="mt-20 text-xs font-bold uppercase tracking-[0.17em] text-gold-deep">
              Para empresas
            </p>
            <h2 className="mt-5 max-w-md font-display text-5xl leading-[0.92] tracking-[-0.04em]">
              Decisões empresariais apoiadas por clareza jurídica.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-ink/70">
              Consultoria e assessoria jurídica voltadas às necessidades e desafios do ambiente
              empresarial.
            </p>
            <ButtonLink
              href={
                "https://wa.me/5524981735277?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20para%20empresas."
              }
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className="mt-9"
            >
              Conhecer nossas soluções <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </AnimatedGroup>
        </div>
      </Container>
    </section>
  );
}
