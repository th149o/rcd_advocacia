import {
  ArrowDown,
  ArrowUpRight,
  ClipboardList,
  Headphones,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { Stagger, StaggerItem } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const steps = [
  ["Primeiro contato", "Você entra em contato e apresenta sua necessidade.", MessageCircle],
  [
    "Entendimento do caso",
    "A situação é analisada de acordo com suas particularidades.",
    ClipboardList,
  ],
  [
    "Orientação jurídica",
    "São apresentados os caminhos e informações relevantes para o caso.",
    Lightbulb,
  ],
  ["Acompanhamento", "O atendimento segue de acordo com as necessidades da demanda.", Headphones],
] as const;

export function Approach() {
  return (
    <section className="bg-gold-wash py-24 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <SectionHeading
            eyebrow="Nossa abordagem"
            title={<>Entenda como podemos ajudar.</>}
            description="Um processo claro para que você saiba o que esperar desde o primeiro contato."
          />
          <div>
            <Stagger className="divide-y divide-ink/15 border-y border-ink/15">
              {steps.map(([title, description, Icon], index) => (
                <StaggerItem
                  key={title}
                  className="group grid gap-4 py-7 sm:grid-cols-[72px_48px_1fr_20px] sm:items-center"
                >
                  <span className="font-mono text-xs text-ink/45">0{index + 1}</span>
                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-gold-deep transition-transform duration-200 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-3xl leading-none">{title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-ink/60">{description}</p>
                  </div>
                  <ArrowDown
                    size={18}
                    className="hidden text-gold-deep sm:block"
                    aria-hidden="true"
                  />
                </StaggerItem>
              ))}
            </Stagger>
            <ButtonLink href="#contato" variant="text" className="mt-9 px-0">
              Iniciar uma conversa <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
