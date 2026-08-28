import {
  ArrowUpRight,
  Eye,
  MessageSquareText,
  Network,
  Scale,
  UserRoundCheck,
  Waves,
} from "lucide-react";
import { Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const differentiators = [
  [
    "Atendimento personalizado",
    "Cada demanda possui suas particularidades e merece uma análise cuidadosa.",
    UserRoundCheck,
  ],
  [
    "Atuação multidisciplinar",
    "Visão ampla para diferentes áreas e necessidades jurídicas.",
    Network,
  ],
  [
    "Orientação estratégica",
    "Apoio jurídico voltado à compreensão do cenário e à tomada de decisões.",
    Eye,
  ],
  [
    "Comunicação clara",
    "Informações apresentadas de forma acessível e objetiva.",
    MessageSquareText,
  ],
  ["Proximidade", "Atendimento próximo e atento às necessidades de cada cliente.", Waves],
  ["Responsabilidade", "Atuação pautada por ética, seriedade e compromisso profissional.", Scale],
] as const;

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-off-white py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Por que a RCD"
              title={<>Uma relação jurídica feita para ser compreendida.</>}
              description="Mais do que responder a uma demanda, buscamos construir uma orientação que faça sentido para o momento e os objetivos de cada cliente."
            />
            <ButtonLink href="#contato" variant="text" className="mt-9 px-0">
              Converse com nossa equipe <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
          <Stagger className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {differentiators.map(([title, description, Icon]) => (
              <StaggerItem key={title} className="border-t border-ink/15 py-7">
                <Icon size={23} strokeWidth={1.4} className="text-gold-deep" aria-hidden="true" />
                <h3 className="mt-7 font-display text-3xl leading-none">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
